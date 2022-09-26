import { Typography } from '@alfalab/core-components/typography';
import { useAtom } from 'jotai';
import clsx from 'clsx';

import { _errorCode } from '../../../store/store';
import { ERROR_CASES } from '../../../constants';
import isVerifyError from '../helpers/helpers';

import styles from '../ErrorPage.module.css';

const { ECOM_INTERNAL_ERROR, CODES_ATTEMPTS_EXCEED, SCORING_TIMEOUT } = ERROR_CASES;

export default function ErrorPageForMobile(props: IInfoPage): JSX.Element {
    const [errorCode] = useAtom(_errorCode);

    const isEcomError = ECOM_INTERNAL_ERROR === errorCode;

    const isAttemptsExceed = clsx({ [styles.content_p_rl]: CODES_ATTEMPTS_EXCEED === errorCode });

    const content = clsx({
        [styles.main_content]: true,
        [styles.content_p_rl]: isEcomError || isVerifyError(errorCode),
    });

    return (
        <div className={content}>
            <div className={clsx(styles.single_title, isAttemptsExceed)}>
                <Typography.Title
                    className={clsx(styles.title, isAttemptsExceed, {
                        [styles.content_p_rl]: isVerifyError(errorCode),
                    })}
                    tag="h1"
                >
                    {props.title}
                </Typography.Title>
            </div>
            <div className={styles.title_wrapper}>
                <Typography.Text
                    className={clsx(styles.error_text, {
                        [styles.content_p_rl]: SCORING_TIMEOUT === errorCode,
                    })}
                >
                    {props.text}
                </Typography.Text>
            </div>
        </div>
    );
}
