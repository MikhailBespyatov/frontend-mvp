import { Typography } from '@alfalab/core-components/typography';

import styles from './Partner.module.css';

export default function Partner(props: IPartnerProps): JSX.Element {
    return (
        <div className={styles.partner}>
            <Typography.Title className={styles.title} tag="h6" view="xsmall">
                Магазин
            </Typography.Title>
            <Typography.Title className={styles.partner_name} tag="h6" view="xsmall">
                {props.partner}
            </Typography.Title>
        </div>
    );
}
