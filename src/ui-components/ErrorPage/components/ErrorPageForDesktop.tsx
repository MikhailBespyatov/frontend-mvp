import { Typography } from '@alfalab/core-components/typography';
import { useAtom } from 'jotai';
import clsx from 'clsx';

import { ERROR_CASES } from '../../../constants';
import { _errorCode } from '../../../store/store';
import isVerifyError from '../helpers/helpers';

import styles from '../ErrorPage.module.css';

const { INVALID_DOCUMENT, DOCUMENT_NOT_FOUND, ECOM_INTERNAL_ERROR, ECOM_UNAVAILABLE } = ERROR_CASES;

export default function ErrorPageForDesktop(props: IInfoPage): JSX.Element {
    const [errorCode] = useAtom(_errorCode);

    const isInvalidDocument = [INVALID_DOCUMENT, DOCUMENT_NOT_FOUND].includes(errorCode);

    const isEcomError = [ECOM_INTERNAL_ERROR, ECOM_UNAVAILABLE].includes(errorCode);

    const titleStyle = clsx({
        [styles.long_title]: !props.text,
        [styles.single_title]: true,
        [styles.long_width_title]: isInvalidDocument,
    });

    const textStyle = clsx({
        [styles.err_width]: isEcomError || isVerifyError(errorCode),
        [styles.long_width_title]: isInvalidDocument,
        [styles.title_wrapper]: true,
    });

    const descStyle = clsx({
        [styles.content_p_rl]: isEcomError,
        [styles.title]: true,
    });

    return (
        <div className={styles.title_with_subtitle}>
            <div className={titleStyle}>
                <Typography.Title className={styles.title} tag="h1">
                    {props.title}
                </Typography.Title>
            </div>
            {props.text && (
                <div className={textStyle}>
                    <Typography.Title className={descStyle} tag="h1">
                        {props.text}
                    </Typography.Title>
                </div>
            )}
        </div>
    );
}
