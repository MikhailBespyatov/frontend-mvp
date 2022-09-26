import { Amount } from '@alfalab/core-components/amount';
import { Typography } from '@alfalab/core-components/typography';

import styles from './Summery.module.css';

export default function Summery(props: ISummary): JSX.Element {
    return (
        <div className={styles.summery}>
            <Typography.Title className={styles.title} tag="h6" view="small">
                Сумма
            </Typography.Title>
            <Amount className={styles.amount} currency="KZT" minority={1} value={props.summary} />
        </div>
    );
}
