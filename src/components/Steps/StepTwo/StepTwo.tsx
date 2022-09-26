import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { Confirmation } from '@alfalab/core-components/confirmation';

import Title from 'ui-components/Title/Title';
import Loader from 'ui-components/Loader/Loader';

import { ERROR_CASES } from '../../../constants';

import { _countdownDuration, _error, _errorCode, _step, _user } from 'store/store';

import HttpService from 'HttpService/HttpService';

import styles from './StepTwo.module.css';

export default function Confirm(): JSX.Element {
    const [title, setTitle] = useState<string>('Подтвердите номер телефона');
    const [subtitle, setSubtitle] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [value, setValue] = useState('');
    const [codeSending] = useState(false);
    const [errorIsFatal] = useState(false);
    const [localeError, setLocaleError] = useState<boolean>(false);

    const [step, setStep] = useAtom(_step);
    const [user] = useAtom(_user);
    const [error, setError] = useAtom(_error);
    const [countdownDuration, setCountdownDuration] = useAtom(_countdownDuration);
    const [, setErrorCode] = useAtom(_errorCode);

    useEffect(() => {
        if (user.phoneNumber) {
            setSubtitle(`Код отправили на номер\n${formatPhoneNumber(user.phoneNumber)}`);
        }
    }, [user]);

    const formatPhoneNumber = (phoneNumber: string) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

        if (match) {
            return '+' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4] + '-' + match[5];
        }
    };

    const setCode = (code: string) => {
        setValue(code);

        if (code.length === 4) {
            handleSubmit(code);
        }
    };

    const handleSubmit = (code: string) => {
        setIsLoading(true);

        setTimeout(() => {
            verifySMS(code);
        }, 2000);
    };

    const verifySMS = (code: string) => {
        setStep(step + 1);
        HttpService.verifySMS({ code: code })
            .then(() => {
                setStep(step + 1);
            })
            .catch((err) => {
                const { code } = err.response.data.error;
                const { WRONG_CODE, CODE_EXPIRED } = ERROR_CASES;

                if ([WRONG_CODE, CODE_EXPIRED].includes(code)) {
                    setLocaleError(true);
                    setTitle('Введён неверный код');
                    setCode('');
                    setIsLoading(false);
                } else {
                    setErrorCode(code);
                    setError(!error);
                }
            });
    };

    const handleSmsRetryClick = () => {
        setCode('');
        setIsLoading(true);

        HttpService.sendSMS({ iin: user.iin, phoneNumber: user.phoneNumber, preappId: user.preappId })
            .then((res) => {
                setCountdownDuration(res.data.data.timeout * 1000);
                setLocaleError(false);
                setTitle('Подтвердите номер телефона');
                setCode('');
                setIsLoading(false);
            })
            .catch((err) => {
                const { code } = err.response.data.error;

                setErrorCode(code);
                setError(!error);
            });
    };

    return (
        <>
            <>
                <div className={styles.wrapper}>
                    <div className={`${localeError ? styles.titleError : ''}`}>
                        <Title title={title} />
                    </div>

                    <Confirmation
                        alignContent="center"
                        buttonRetryText="Отправить код ещё раз"
                        className={styles.confirmation}
                        code={value}
                        codeSending={codeSending}
                        countdownDuration={countdownDuration}
                        dataTestId="input-phone-confirmation"
                        errorIsFatal={errorIsFatal}
                        onInputChange={({ code }) => setCode(code)}
                        onInputFinished={() => ({})}
                        onSmsRetryClick={handleSmsRetryClick}
                        overlimitCountdownDuration={countdownDuration}
                        requiredCharAmount={4}
                        signTitle={<span className={styles.confirmationHeaderCustom}>{subtitle}</span>}
                    />
                </div>
            </>
            {isLoading && <Loader />}
        </>
    );
}
