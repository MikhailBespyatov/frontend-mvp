import { CheckmarkMIcon } from '@alfalab/icons-glyph';
import styles from './SuccessIcon.module.css';

export const SuccessIcon = (): JSX.Element => (
    <span className={styles.success}>
        <CheckmarkMIcon className={styles.svg} height={16} width={16} />
    </span>
);
