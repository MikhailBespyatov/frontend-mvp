import styles from './PaymentSchedule.module.css';
import { ReactComponent as TooltipIcon } from 'assets/images/linking_card/tooltip_icon.svg';
import { getPaydayDate } from '../../constants';
import { PaymentScheduleProps } from 'types/models';
import { Tooltip } from '@alfalab/core-components/tooltip';

export const PaymentSchedule = ({ items }: PaymentScheduleProps): JSX.Element => {
    const summ = items.reduce((acc, cur) => (acc += cur.payment), 0);

    return (
        <div className={styles.payment_schedule}>
            <h2 className={styles.payment_schedule_title}>
                График платежей
                <Tooltip
                    arrowClassName={styles.tooltip_arrow}
                    content={<p>График платежей может изменяться в зависимости от даты доставки заказа</p>}
                    contentClassName={styles.popover}
                    onCloseDelay={100}
                    onOpenDelay={100}
                    popoverClassName={styles.tooltip}
                    position="bottom-start"
                >
                    <TooltipIcon className={styles.tooltip_icon} />
                </Tooltip>
            </h2>
            <div className={styles.prepayment}>
                <span>Предоплата</span>
                <span>0 ₸</span>
            </div>
            <ul className={styles.progress_list}>
                {items.map(({ payday, payment, termId }) => {
                    const date = getPaydayDate(payday);

                    return (
                        <li className={styles.progress_item} key={termId}>
                            <p className={styles.date}>{date}</p>
                            <p className={styles.payment}>{payment} ₸</p>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.sum_wrapper}>
                <span>Сумма</span>
                <span>{summ} ₸</span>
            </div>
        </div>
    );
};
