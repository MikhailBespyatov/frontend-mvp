import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import clsx from 'clsx';
import { Typography } from '@alfalab/core-components/typography';

import configs from './configs/configs';

import HttpService from 'HttpService/HttpService';

import { _error, _errorCode, _partner, _paymentSchedule, _step } from 'store/store';
import { ERROR_CASES } from '../../../constants';

import { clouds } from 'configs/mode_change';
import styles from './Scoring.module.css';
import cn from 'classnames';
import { PERCENT } from './constants';

export default function Scoring(): JSX.Element {
    const [step, setStep] = useAtom(_step);
    const [, setPartner] = useAtom(_partner);
    const [, setPaymentShedule] = useAtom(_paymentSchedule);
    const [error, setError] = useAtom(_error);
    const [, setErrorCode] = useAtom(_errorCode);

    const [scoringStep, setScoringStep] = useState(0);

    const { title, image: Image } = configs[scoringStep];

    useEffect(() => {
        getStatus();
    }, []);

    const timeoutId = setTimeout(() => setScoringStep(scoringStep + 1), 3000);

    if (scoringStep === 3) {
        clearTimeout(timeoutId);
    }

    useEffect(() => {
        if (scoringStep === 3) {
            setStep(step + 1);
        }
    }, [scoringStep]);

    const getStatus = () => {
        HttpService.getStatus()
            .then((res) => {
                const {
                    partnerData: { partnerName },
                    terms,
                    code,
                    redirectLink,
                } = res.data.data;

                if (res.status === 200) {
                    if (code === ERROR_CASES.ECOM_INTERNAL_ERROR) {
                        window.location.href = redirectLink;
                    }
                    setPartner(partnerName);
                    setPaymentShedule(terms);
                    setScoringStep(3);
                    setTimeout(() => setStep(step + 1), 1000);
                }

                if (res.status === 202) {
                    setTimeout(() => {
                        getStatus();
                    }, 2000);
                }
            })
            .catch((err) => {
                const { code } = err.response.data.error;

                setErrorCode(code);
                setError(!error);
            });
    };

    return (
        <div className={styles.main_container}>
            <div>
                <img alt="Cloud one" className={clsx(styles.cloud, styles.cloud_one)} src={clouds.one} />
                <img alt="Cloud two" className={clsx(styles.cloud, styles.cloud_two)} src={clouds.two} />
                <img alt="Cloud three" className={clsx(styles.cloud, styles.cloud_three)} src={clouds.three} />

                <Image className={styles.img} />
                <div className={styles.line_wrapper}>
                    <span className={clsx(styles.line, styles.line_active)}></span>
                    <span className={clsx(styles.line, { [styles.line_active]: scoringStep > 0 })}></span>
                    <span className={clsx(styles.line, { [styles.line_active]: scoringStep > 1 })}></span>
                    <span className={clsx(styles.line, { [styles.line_active]: scoringStep > 2 })}></span>
                </div>
                <div className={styles.title_with_subtitle}>
                    <div className={styles.single_title}>
                        <Typography.Title className={styles.title} tag="h1">
                            Это займёт 30 секунд
                        </Typography.Title>
                    </div>

                    <div className={styles.title_wrapper}>
                        <Typography.Title className={styles.title} tag="h1">
                            {title}
                        </Typography.Title>
                    </div>
                </div>
                <div className={styles.progress_wrapper}>
                    <div className={styles.initial_progress}>
                        <span className={styles.progress_percent}>{PERCENT[scoringStep as keyof typeof PERCENT]}</span>
                        <div className={cn(styles.progress, styles[`progress_${scoringStep}`])}></div>
                    </div>
                </div>

                {/* <div className={styles.loader_wrapper}>
                    <div className={styles.loader}>
                        {Array(12)
                            .fill('')
                            .map((_, i) => (
                                <div key={i}></div>
                            ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
