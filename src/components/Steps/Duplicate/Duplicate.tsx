import { useAtom } from 'jotai';
import clsx from 'clsx';
import { Typography } from '@alfalab/core-components/typography';
import UIButton from 'ui-components/Button/Button';

import HttpService from 'HttpService/HttpService';

import { isDarkMode, _error } from 'store/store';

import { ReactComponent as Image } from 'assets/images/duplicate/duplicate.svg';
import { ReactComponent as ImageBlack } from 'assets/images/black_mode/duplicate/duplicate.svg';

import { clouds } from '../../../configs/mode_change';
import styles from './Duplicate.module.css';

const smallDevice = window.innerWidth < 360;

export default function Duplicate(props: ITitleProps): JSX.Element {
    const [error, setError] = useAtom(_error);

    const handleProceed = () => {
        HttpService.proceed()
            .then((res) => {
                window.location.href = res.data.data.redirectLink;
            })
            .catch(() => {
                setError(!error);
            });
    };

    const handleDuplicate = () => {
        HttpService.duplicate()
            .then((res) => {
                window.location.href = res.data.data.redirectLink;
            })
            .catch(() => {
                setError(!error);
            });
    };

    return (
        <div className={styles.main_container}>
            <div>
                <img alt="Cloud one" className={clsx(styles.cloud, styles.cloud_one)} src={clouds.one} />
                <img alt="Cloud two" className={clsx(styles.cloud, styles.cloud_two)} src={clouds.two} />
                <img alt="Cloud three" className={clsx(styles.cloud, styles.cloud_three)} src={clouds.three} />

                {isDarkMode ? <ImageBlack className={styles.img} /> : <Image className={styles.img} />}

                <div className={styles.title_with_subtitle}>
                    <div className={styles.single_title}>
                        <Typography.Title className={styles.title} tag="h1">
                            У вас есть активная заявка <span>на этапе</span> «{props.title}»
                        </Typography.Title>
                    </div>

                    <div className={styles.title_wrapper}>
                        <Typography.Title className={styles.title} tag="h1">
                            Хотите вернуться к старой заявке или создать новую?
                        </Typography.Title>
                    </div>
                </div>
                <div className={styles.btn_wrapper}>
                    <UIButton
                        btnType="cancel"
                        change={handleDuplicate}
                        dataTestId="button-cancel"
                        disable={false}
                        title={smallDevice ? 'Cоздать' : 'Создать новую'}
                    />

                    <UIButton
                        btnType="continue"
                        change={handleProceed}
                        dataTestId="button-continue"
                        disable={false}
                        title={smallDevice ? 'Продолжить' : 'Продолжить старую'}
                    />
                </div>
            </div>
        </div>
    );
}
