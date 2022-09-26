import { ChangeEvent, useEffect, useState } from 'react';

import { useAtom } from 'jotai';

import { MaskedInput } from '@alfalab/core-components/masked-input';
import { CheckmarkMIcon } from '@alfalab/icons-glyph';
import { CrossMIcon } from '@alfalab/icons-glyph';

import { _countdownDuration, _error, _errorCode, _preappId, _step, _user } from '../../../store/store';

import { MASKS, PATTERNS, PLACEHOLDERS, ERROR_CASES, PAGE_CASES } from '../../../constants';

import Title from '../../../ui-components/Title/Title';
import UIButton from '../../../ui-components/Button/Button';
import Agreement from '../../../ui-components/Agreement/Agreement';

import flag from '../../../assets/images/screen1/flag.svg';

import HttpService from '../../../HttpService/HttpService';

import styles from './StepOne.module.css';
import clsx from 'clsx';
import { getBrowser } from 'helpers/utils';
import { browserValidVersions } from 'constants/browserValidVersions';
import { OldBrowserAlert } from 'ui-components/OldBrowserAlert/OldBrowserAlert';

export default function StepOne(): JSX.Element {
    const [user, setUser] = useAtom(_user);
    const [step, setStep] = useAtom(_step);
    const [error, setError] = useAtom(_error);
    const [errorCode, setErrorCode] = useAtom(_errorCode);
    const [, setCountdownDuration] = useAtom(_countdownDuration);

    const [title, setTitle] = useState<string>('Оформите рассрочку за 2 минуты');
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [iin, setIin] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [idError, setIinError] = useState<boolean>(false);
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(true);
    const [pageError, setPageError] = useState<boolean>(false);
    const [preappId] = useAtom(_preappId);
    const browser = getBrowser();
    const browserIsValid =
        !browserValidVersions.hasOwnProperty(browser.name.toLowerCase()) ||
        !browser.version ||
        browserValidVersions[browser.name.toLowerCase()] <= browser.version;

    useEffect(() => {
        if (user.phoneNumber && user.phoneNumber !== userPhoneNumber) {
            setPhoneNumberError(!PATTERNS.phone.test(user.phoneNumber));
            setUserPhoneNumber(user.phoneNumber);
        }

        if (user.iin) {
            setIin(user.iin);
        }

        if (user.checked) {
            setChecked(user.checked);
        }

        setIinError(!PATTERNS.iin.test(user.iin));

        validate();
    }, [userPhoneNumber, iin, user]);

    useEffect(() => {
        if ([PAGE_CASES.BMG_DECLINED, ERROR_CASES.IIN_PHONE_MISMATCH].includes(errorCode)) {
            agreedWithServicePolicy(false);
            setIsDisabled(true);
            setTitle('Ваш номер не совпадает с зарегистрированным ИИН');
            setPageError(true);
            setPhoneNumberError(true);
        }
    }, [errorCode]);

    const validate = () => {
        if (checked && !idError && !phoneNumberError) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    const handleChange = () => {
        setStep(step + 1);
        HttpService.sendSMS({ iin: user.iin, phoneNumber: user.phoneNumber, preappId: user.preappId })
            .then((res) => {
                setCountdownDuration(res.data.data.timeout * 1000);
                setStep(step + 1);
            })
            .catch((err) => {
                const { code } = err.response.data.error;

                setErrorCode(code);
                if (code !== ERROR_CASES.IIN_PHONE_MISMATCH) {
                    setError(!error);
                    setPhoneNumberError(false);
                } else {
                    setPhoneNumberError(true);
                    setPageError(true);
                }
            });
    };

    const changeIin = (ev: ChangeEvent<HTMLInputElement>) => {
        const newUser = { ...user };
        newUser.iin = ev.target.value.replace(/\s/g, '');
        setUser(newUser);
    };

    const changePhoneNumber = (ev: ChangeEvent<HTMLInputElement>) => {
        const newUser = { ...user };
        newUser.phoneNumber = ev.target.value.replace(/\D/g, '');
        setUser(newUser);
    };

    const agreedWithServicePolicy = (ev: boolean) => {
        setChecked(ev);
        const newUser = { ...user, checked: ev };
        setUser(newUser);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.main_container}>
                <div className={`${pageError ? styles.titleError : ''}`}>
                    <Title title={title} />
                    {pageError ? (
                        <p>
                            Либо вас нет в Базе: пройдите в{' '}
                            <a
                                href="https://egov.kz/cms/ru/articles/mobilecitizen"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                eGov
                            </a>{' '}
                            для регистрации и возвращайтесь к нам
                        </p>
                    ) : (
                        <p className={styles.description}>Введите Ваши данные</p>
                    )}
                </div>
                <div className={clsx(styles.form_container, { [styles.form_container_mt]: !pageError })}>
                    <div className={styles.input_container}>
                        <label>ИИН</label>
                        <div className={styles.masked_input}>
                            <MaskedInput
                                block={true}
                                className={`${idError ? styles.iinError : ''}`}
                                dataTestId="input-iin"
                                defaultValue={user.iin}
                                mask={MASKS.iin}
                                onChange={(ev) => changeIin(ev)}
                                placeholder={PLACEHOLDERS.iin}
                                rightAddons={
                                    !idError ? (
                                        <span className={styles.success}>
                                            <CheckmarkMIcon />
                                        </span>
                                    ) : (
                                        <span className={styles.error}>
                                            <CrossMIcon />
                                        </span>
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.input_container}>
                        <label>Номер телефона</label>
                        <div className={`${styles.masked_input} ${styles.phone_input}`}>
                            <img alt="KZ flag" src={flag} />
                            <MaskedInput
                                block={true}
                                className={`${phoneNumberError ? styles.phoneError : ''}`}
                                dataTestId="input-phone"
                                defaultValue={user.phoneNumber}
                                mask={MASKS.phone}
                                onChange={changePhoneNumber}
                                placeholder={PLACEHOLDERS.phone}
                                rightAddons={
                                    !phoneNumberError ? (
                                        <span className={styles.success}>
                                            <CheckmarkMIcon />
                                        </span>
                                    ) : (
                                        <span className={styles.error}>
                                            <CrossMIcon />
                                        </span>
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.input_container}>
                        <Agreement
                            check={(ev) => agreedWithServicePolicy(ev)}
                            checked={checked}
                            dataTestId="checkbox-personal-data"
                            linkUrl={`${HttpService.baseUrl}${preappId}/agreement`}
                            linkedText="обработку персональных данных"
                            title="Я соглашаюсь на "
                        />
                    </div>
                </div>
                <div className={styles.input_container_btn}>
                    <UIButton
                        btnType="continue"
                        change={handleChange}
                        dataTestId="button-continue"
                        disable={isDisabled}
                        title="Продолжить"
                    />
                </div>
            </div>
            <div className={styles.desktop_bg}></div>
            {!browserIsValid && <OldBrowserAlert />}
        </div>
    );
}
