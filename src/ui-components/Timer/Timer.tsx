import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { Tooltip } from '@alfalab/core-components/tooltip';

import { _expire, _step } from 'store/store';

import { ReactComponent as TimerImg } from 'assets/images/ui_components/timer/timer.svg';

import styles from './Timer.module.css';
import { ApplicationStep } from 'store/store.types';
import clsx from 'clsx';

const Timer = (): JSX.Element => {
    const [expire] = useAtom(_expire);
    const [step] = useAtom(_step);
    const [start, setStart] = useState(new Date().getTime());

    const isDuplicate = ApplicationStep.DUPLICATE === step;

    const end = new Date(Date.parse(expire)).getTime() || new Date().getTime();

    const timer = new Date(end - start).toISOString().substr(11, 8);

    useEffect(() => {
        const timerId = setTimeout(() => setStart(new Date().getTime()), 1000);
        if (end - start < 1000) {
            clearTimeout(timerId);
            setStart(end);
        }

        return () => clearTimeout(timerId);
    }, [timer]);

    return (
        <div className={clsx({ [styles.timer]: !isDuplicate })}>
            <Tooltip
                arrowClassName={styles.arrow}
                content={<div>У вас осталось {timer} времени на оформление рассрочки</div>}
                contentClassName={styles.content}
                position="top-start"
                trigger="hover"
            >
                <div className={styles.seconds}>
                    <TimerImg />
                    <span>{timer}</span>
                </div>
            </Tooltip>
        </div>
    );
};

export default Timer;
