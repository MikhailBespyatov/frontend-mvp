import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import Header from './layout/Header/Header';

import StepOne from 'components/Steps/StepOne/StepOne';
import StepTwo from './components/Steps/StepTwo/StepTwo';
import Scoring from './components/Steps/Scoring/Scoring';
import StepFour from './components/Steps/StepFour/StepFour';
import Duplicate from './components/Steps/Duplicate/Duplicate';

import ErrorPage from './ui-components/ErrorPage/ErrorPage';
import Preloader from './ui-components/Preloader/Preloader';

import { ApplicationStep } from './store/store.types';
import { ERROR_CASES, PAGE_CASES } from './constants';
import {
    _error,
    _errorCode,
    _partner,
    _preappId,
    _redirectLinkToMarket,
    _step,
    _user,
    _expire,
    _paymentSchedule,
    _partnerCode,
} from './store/store';

import HttpService from './HttpService/HttpService';

import './App.css';
import { MESSAGES_BY_CODE } from 'constants/message';
import { LinkingCard } from 'components/Steps/LinkingCard/LinkingCard';

const {
    SMS_SENT,
    MERCHANT_CONFIRMED,
    BMG_DECLINED,
    PAYMENT_SUCCESS,
    PAYMENT_WITHDRАWN,
    APPROVE_AWAIT,
    COMPLETED,
    FINAL_MERCHANT_UNAVAILABLE,
    ECOM,
} = PAGE_CASES;

const { VERIFY, CONFIRM, SCORING, DECISION, FINAL, DUPLICATE } = ApplicationStep;

export default function App(): JSX.Element {
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('Начато оформление');
    const [, setPreappId] = useAtom(_preappId);
    const [, setExpire] = useAtom(_expire);
    const [step, setStep] = useAtom(_step);
    const [error, setError] = useAtom(_error);
    const [, setErrorCode] = useAtom(_errorCode);
    const [user, setUser] = useAtom(_user);
    const [, setPartner] = useAtom(_partner);
    const [, setPartnerCode] = useAtom(_partnerCode);
    const [, setPaymentShedule] = useAtom(_paymentSchedule);
    const [redirectLinkToMarket, setRedirectLinkToMarket] = useAtom(_redirectLinkToMarket);
    const queryParams = new URLSearchParams(window.location.search);

    const isDuplicate = (queryParams.get('duplicate') as string) === 'true';

    useEffect(() => {
        if ((queryParams.get('preapp') as string) !== '') {
            setPreappId(queryParams.get('preapp') as string);
        } else {
            setError(true);
        }

        if (isDuplicate) {
            setStep(DUPLICATE);
        }

        const newUser = { ...user };
        newUser.preappId = queryParams.get('preapp') as string;

        setUser(newUser);

        const link = queryParams.get('link') as string;

        if (!localStorage.getItem(newUser.preappId) && link) {
            localStorage.setItem(newUser.preappId, link);
        }

        const redirectUrl = localStorage.getItem(newUser.preappId) as string;
        setRedirectLinkToMarket(redirectUrl);

        if (newUser.preappId) {
            getStatus(newUser.preappId);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getStatus = (preappId: string) => {
        setIsLoading(true);

        HttpService.getStatus(preappId)
            .then((res) => {
                const {
                    iin,
                    phoneNumber,
                    code,
                    partnerData: { partnerName, partnerCode },
                    expiresAt,
                    redirectLink,
                } = res.data.data;
                setMessage(MESSAGES_BY_CODE[code as keyof typeof MESSAGES_BY_CODE]);

                setExpire(expiresAt);

                if ([APPROVE_AWAIT, COMPLETED, FINAL_MERCHANT_UNAVAILABLE].includes(code)) {
                    setRedirectLinkToMarket(redirectLink);
                }

                if (res.status === 200) {
                    if (code === ERROR_CASES.ECOM_INTERNAL_ERROR) {
                        window.location.href = redirectLink;
                    }
                    if (!isDuplicate) {
                        switch (code) {
                            case SMS_SENT: {
                                setStep(CONFIRM);
                                break;
                            }
                            case MERCHANT_CONFIRMED:
                            case ECOM: {
                                setPaymentShedule(res.data.data.terms);
                                setStep(DECISION);
                                break;
                            }
                            case PAYMENT_SUCCESS:
                            case PAYMENT_WITHDRАWN:
                            case APPROVE_AWAIT:
                            case COMPLETED:
                            case FINAL_MERCHANT_UNAVAILABLE: {
                                setStep(FINAL);
                                break;
                            }
                            case BMG_DECLINED: {
                                setErrorCode(code);
                                break;
                            }
                            default:
                                setStep(VERIFY);
                        }
                    }

                    const newUser = { ...user };
                    newUser.iin = iin;
                    newUser.phoneNumber = phoneNumber;

                    setUser(newUser);
                    setIsLoading(false);
                    setPartner(partnerName);
                    setPartnerCode(partnerCode);
                }

                if (res.status === 202) {
                    if (code === ECOM) {
                        setStep(DECISION);
                        setPaymentShedule(res.data.data.terms);
                        setIsLoading(false);
                        return;
                    }
                    if (isDuplicate) {
                        setIsLoading(false);
                    } else if (code === 106) {
                        setStep(SCORING);
                        setIsLoading(false);
                    } else {
                        setTimeout(() => {
                            getStatus(preappId);
                        }, 2000);
                    }
                }
            })
            .catch((err) => {
                const { code, details } = err.response.data.error;

                if (isDuplicate && code === 20) {
                    setMessage('Привязка карты');
                    setExpire(details[0].expire);
                } else {
                    setError(!error);
                }

                setErrorCode(code);
                setIsLoading(false);
            });
    };

    if (error) {
        return <ErrorPage />;
    } else if (isloading) {
        return <Preloader />;
    } else {
        return (
            <>
                <Header link={redirectLinkToMarket} />
                {step === VERIFY && <StepOne />}
                {step === CONFIRM && <StepTwo />}
                {step === SCORING && <Scoring />}
                {step === DECISION && <LinkingCard />}
                {step === FINAL && <StepFour />}
                {step === DUPLICATE && <Duplicate title={message} />}
            </>
        );
    }
}
