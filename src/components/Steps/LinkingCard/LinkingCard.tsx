import styles from './LinkingCard.module.css';
import { ReactComponent as SuccessIcon } from 'assets/images/linking_card/success_icon.svg';
import UIButton from 'ui-components/Button/Button';
import { PaymentSchedule } from './components/PaymentSchedule/PaymentSchedule';
import { SavedCards } from './components/SavedCards/SavedCards';
import { Payments } from './components/Payments/Payments';
import {
    _activeSavedCard,
    _cardData,
    _cardErrors,
    _error,
    _errorCode,
    _partner,
    _paymentSchedule,
    _preappId,
    _redirectLinkToMarket,
    _step,
    _userCards,
} from 'store/store';
import { useAtom } from 'jotai';
import { getFormErrors, START_DATE } from './constants';
import { useState } from 'react';
import HttpService from 'HttpService/HttpService';
import Loader from 'ui-components/Loader/Loader';
import { ApplicationStep } from 'store/store.types';
import { PAGE_CASES } from '../../../constants';

enum PageState {
    DECISION,
    SAVED_CARDS,
    PAYMENT,
}

const { DECISION, SAVED_CARDS, PAYMENT } = PageState;

export const LinkingCard = (): JSX.Element => {
    const [pageState, setPageState] = useState(DECISION);
    const [data] = useAtom(_cardData);
    const [, setErrors] = useAtom(_cardErrors);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useAtom(_error);
    const [redirectLinkToMarket] = useAtom(_redirectLinkToMarket);
    const [userCards] = useAtom(_userCards);
    const [, setErrorCode] = useAtom(_errorCode);
    const [step, setStep] = useAtom(_step);
    const [activeSavedCard] = useAtom(_activeSavedCard);
    const [preappId] = useAtom(_preappId);
    const [paymentSchedule] = useAtom(_paymentSchedule);
    const [partnerName] = useAtom(_partner);
    let getStatusRunCount = 0;

    const handleCancel = () => {
        setIsLoading(true);

        HttpService.cancelOrder()
            .then(() => {
                window.location.href = redirectLinkToMarket;
                setIsLoading(false);
            })
            .catch(() => {
                setError(!error);
            });
    };

    const setInitialError = () => {
        setErrorCode(0);
        setError(!error);
    };

    const onCard = () => {
        if (!activeSavedCard) {
            return;
        }

        setIsLoading(true);

        HttpService.useCard(activeSavedCard)
            .then(() =>
                HttpService.getStatus()
                    .then(() => {
                        setIsLoading(false);
                        setStep(ApplicationStep.FINAL);
                    })
                    .catch(setInitialError),
            )
            .catch(setInitialError);
    };

    const getSavedCards = () => {
        setPageState(PAYMENT);
        // setIsLoading(true);
        //     HttpService.getUCards()
        //         .then(({ data: { UserCards } }) => {
        //             const haveData = UserCards[0].cardMask;
        //             if (UserCards.length !== 0 && haveData) {
        //                 setUserCards(UserCards);
        //                 setPageState(SAVED_CARDS);
        //                 setIsLoading(false);
        //             } else {
        //                 setPageState(PAYMENT);
        //                 setIsLoading(false);
        //             }
        //         })
        //         .catch(() => {
        //             setPageState(PAYMENT);
        //             setIsLoading(false);
        //         });
    };

    const getStatus = async () => {
        if (getStatusRunCount === 3) {
            getStatusRunCount = 0;
            setErrorCode(0);
            setError(!error);
            return;
        }
        HttpService.getStatus(preappId)
            .then((res) => {
                if (res.data.data.code === PAGE_CASES.COMPLETED) {
                    setStep(ApplicationStep.FINAL);
                    setIsLoading(false);
                } else {
                    setTimeout(() => {
                        getStatusRunCount++;
                        getStatus();
                    }, 2000);
                }
            })
            .catch(setInitialError);
    };

    const verifyCard = (formData: ICardData) => {
        HttpService.verifyCard(formData)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.Code) {
                        getStatus();
                    }
                    if (res.data.body.cardRequestLink) {
                        window.location.href = res.data.body.cardRequestLink;
                    }
                }
            })
            .catch(() => {
                getStatus();
            });
    };

    const verifyOrder = (formData: ICardData) => {
        HttpService.verifyOrder()
            .then((res) => {
                if (res.status === 200) {
                    verifyCard(formData);
                }
            })
            .catch(setInitialError);
    };

    const onSubmit = () => {
        const formData = { ...data, exp_year: `${START_DATE}${data.exp_year}` };
        const errors = getFormErrors(formData);
        const isNotValidity = Object.values(errors).some(Boolean);

        if (isNotValidity) {
            setErrors(errors);
            return;
        } else {
            setStep(step + 1);
            setIsLoading(true);
            verifyOrder(formData);
        }
    };

    const onContinue = () => {
        switch (pageState) {
            case DECISION:
                getSavedCards();
                break;
            case SAVED_CARDS:
                onCard();
                break;
            case PAYMENT:
                onSubmit();
                break;
        }
    };

    return (
        <div className={styles.main_wrapper}>
            <div className={styles.content_wrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.title_wrapper}>
                        <SuccessIcon className={styles.success_icon} />
                        <h1 className={styles.title}>Магазин одобрил рассрочку</h1>
                        <p className={styles.desctiption}>
                            Первый платёж запланирован
                            <br /> через 30 дней после доставки заказа
                        </p>
                    </div>
                </div>

                <PaymentSchedule items={paymentSchedule} />

                <div className={styles.wrapper}>
                    <div className={styles.score}>
                        <span>Магазин</span>
                        <span>{partnerName}</span>
                    </div>

                    {isLoading ? (
                        <Loader />
                    ) : pageState === SAVED_CARDS ? (
                        <SavedCards cards={userCards} onClick={() => setPageState(PAYMENT)} />
                    ) : pageState === PAYMENT ? (
                        <Payments />
                    ) : null}

                    <div className={styles.btn_wrapper}>
                        <UIButton
                            btnType="cancel"
                            change={handleCancel}
                            dataTestId="button-cancel"
                            disable={false}
                            title="Отказаться"
                        />
                        <UIButton
                            btnType="continue"
                            change={onContinue}
                            dataTestId="button-accept"
                            disable={false}
                            title="Продолжить"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
