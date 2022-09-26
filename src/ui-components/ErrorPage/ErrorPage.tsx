import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useAtom } from 'jotai';

import { _errorCode, _redirectLinkToMarket } from 'store/store';

import {
    stepOneErrorConfigs,
    stepThreeErrorConfigs,
    stepTwoErrorConfigs,
    stepTwoInvalidDocumentErrorConfigs,
    stepTwoVerifySmsErrorConfigs,
    stepTwoScoringTimeoutErrorConfigs,
    stepThreeEcomErrorConfigs,
    stepThreeEcomExceedErrorConfigs,
    TaxDebtAboveLimitErrorConfigs,
    ErrBmgExceed,
} from './configs/configs';

import HttpService from 'HttpService/HttpService';

import { ERROR_CASES } from '../../constants';
import isVerifyError from './helpers/helpers';

import Loader from '../Loader/Loader';
import UIButton from '../Button/Button';

import ErrorPageForDesktop from './components/ErrorPageForDesktop';
import ErrorPageForMobile from './components/ErrorPageForMobile';

import { clouds } from 'configs/mode_change';
import styles from './ErrorPage.module.css';

const {
    APP_NOT_FOUND,
    MERCHANT_UNAVAILABLE,
    CODES_ATTEMPTS_EXCEED,
    CODES_ATTEMPTS_IN_PERIOD_EXCEED,
    INVALID_DOCUMENT,
    DOCUMENT_NOT_FOUND,
    SCORING_TIMEOUT,
    UKK_ERROR,
    MERCHANT_DECLINED,
    ACTIVE_POS_FOUND,
    DECLINE_PERIOD,
    UKK_FORBIDDEN,
    TAX_DEBT,
    ERR_BMG_EXCEED,
    ECOM_INTERNAL_ERROR,
    ECOM_ATTEMPTS_EXCEED,
} = ERROR_CASES;

export default function ErrorPage(): JSX.Element {
    const [redirectLinkToMarket] = useAtom(_redirectLinkToMarket);
    const [errorCode, setErrorCode] = useAtom(_errorCode);

    const [config, setConfig] = useState<IInfoPage | undefined>();
    const [deviceWidth] = useState(window.innerWidth);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { image: ErrorImage } = config || {};

    useEffect(() => {
        switch (errorCode) {
            case APP_NOT_FOUND:
            case MERCHANT_UNAVAILABLE:
                setConfig(stepOneErrorConfigs);

                break;
            case CODES_ATTEMPTS_EXCEED:
            case CODES_ATTEMPTS_IN_PERIOD_EXCEED:
                setConfig(stepTwoErrorConfigs);

                break;
            case INVALID_DOCUMENT:
            case DOCUMENT_NOT_FOUND:
                setConfig(stepTwoInvalidDocumentErrorConfigs);

                break;
            case ACTIVE_POS_FOUND:
            case DECLINE_PERIOD:
            case UKK_FORBIDDEN:
                setConfig(stepTwoVerifySmsErrorConfigs);

                break;
            case SCORING_TIMEOUT:
                setConfig(stepTwoScoringTimeoutErrorConfigs);

                break;
            case TAX_DEBT:
                setConfig(TaxDebtAboveLimitErrorConfigs);

                break;
            case UKK_ERROR:
            case MERCHANT_DECLINED:
                setConfig(stepThreeErrorConfigs);

                break;
            case ERR_BMG_EXCEED:
                setConfig(ErrBmgExceed);

                break;
            case ECOM_INTERNAL_ERROR:
                setConfig(stepThreeEcomErrorConfigs);

                break;
            case ECOM_ATTEMPTS_EXCEED:
                setConfig(stepThreeEcomExceedErrorConfigs);

                break;
            default:
                setConfig(stepOneErrorConfigs);
        }
    }, [errorCode]);

    const goBack = () => {
        window.location.href = redirectLinkToMarket;
    };

    const handleCheckout = () => {
        setIsLoading(true);

        HttpService.verifyOrder()
            .then((res) => {
                window.location.href = res.data.data.redirectLink;
                setIsLoading(false);
            })
            .catch((err) => {
                const { code } = err.response.data.error;

                setErrorCode(code);
                setIsLoading(false);
            });
    };

    const isEcomError = ECOM_INTERNAL_ERROR === errorCode;

    const desktopStyle = clsx({
        [styles.tablet_big_img]: isVerifyError(errorCode),
        [styles.error_for_desktop]: true,
        [styles.tablet_small_img]: !config?.text,
    });

    const mobileStyle = clsx({
        [styles.mobile_img]: true,
        [styles.err_width]: isVerifyError(errorCode),
    });

    return (
        <div className={styles.errorPage_container}>
            {config && (
                <>
                    <div className={mobileStyle}>
                        <ErrorImage />
                    </div>
                    <div className={styles.desktop_img}>
                        <img alt="Cloud one" className={clsx(styles.cloud, styles.cloud_one)} src={clouds.one} />
                        <img alt="Cloud two" className={clsx(styles.cloud, styles.cloud_two)} src={clouds.two} />
                        <img alt="Cloud three" className={clsx(styles.cloud, styles.cloud_three)} src={clouds.three} />

                        <ErrorImage className={desktopStyle} />
                    </div>

                    {deviceWidth < 600 ? <ErrorPageForMobile {...config} /> : <ErrorPageForDesktop {...config} />}

                    <div className={isEcomError ? styles.btn_wrapper : styles.input_container}>
                        <UIButton
                            btnType={isEcomError ? 'cancel' : 'continue'}
                            change={goBack}
                            dataTestId="button-go-back"
                            disable={false}
                            title={isEcomError && deviceWidth < 600 ? 'В магазин' : 'Вернуться в магазин'}
                        />
                        {isEcomError && (
                            <UIButton
                                btnType="continue"
                                change={handleCheckout}
                                dataTestId="button-try-again"
                                disable={false}
                                title="Привязать ещё"
                            />
                        )}
                    </div>
                </>
            )}
            {isLoading && <Loader />}
        </div>
    );
}
