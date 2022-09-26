import styles from './ErrorIcon.module.css';
import { CrossMIcon } from '@alfalab/icons-glyph';

export const ErrorIcon = (): JSX.Element => (
    <span className={styles.error}>
        <CrossMIcon className={styles.svg} height={16} width={16} />
    </span>
);
