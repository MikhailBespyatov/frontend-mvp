import { Typography } from '@alfalab/core-components/typography';
import { Amount } from '@alfalab/core-components/amount';
import { Tooltip } from '@alfalab/core-components/tooltip';
import { InformationCircleLineSIcon } from '@alfalab/icons-glyph';

import Partner from '../../Partner/Partner';
import Summery from '../../Summery/Summery';

import styles from '../PaymentSchedule.module.css';

const PaymentScheduleForDesktop = (props: IPaymentScheduleListChildProps): JSX.Element => {
    const { SEQUENCE, convertDate, countPaymentTotalAmount, open, openDetail, partner, paymentSchedule } = props;

    return (
        <div>
            <div className={styles.desktop_wrapper_one}>
                <div className={styles.payment}>
                    <div className={`${styles.payment_amount} ${styles.prepayment}`}>
                        <Typography.Title className={styles.timePeriod} tag="h6">
                            Предоплата
                        </Typography.Title>

                        <Amount className={styles.amount} currency="KZT" minority={1} value={0} />
                    </div>
                </div>
                <div className={styles.payment}>
                    <Summery summary={countPaymentTotalAmount()} />
                </div>
            </div>
            <div className={styles.payment_list}>
                {paymentSchedule.map((scheduleListItem, index) => (
                    <div className={styles.scheduleListItem} key={index}>
                        <Typography.Title className={styles.title} tag="h6" view="xsmall">
                            {SEQUENCE[index]}
                        </Typography.Title>

                        <div className={styles.payment_date}>
                            <div>
                                <Typography.Title tag="h6" view="xsmall">
                                    {convertDate(scheduleListItem.payday)}
                                </Typography.Title>

                                {index === 0 && (
                                    <div className={styles.details}>
                                        <Tooltip
                                            arrowClassName={styles.tooltip_arrow}
                                            content={
                                                <p>
                                                    График платежей может изменяться в зависимости от даты доставки
                                                    заказа
                                                </p>
                                            }
                                            contentClassName={styles.popover}
                                            onClose={() => openDetail(Number(scheduleListItem.termId))}
                                            onCloseDelay={100}
                                            onOpen={() => openDetail(Number(scheduleListItem.termId))}
                                            onOpenDelay={100}
                                            open={open === Number(scheduleListItem.termId)}
                                            popoverClassName={styles.tooltip}
                                            position="bottom-start"
                                        >
                                            <InformationCircleLineSIcon className={styles.info} />
                                        </Tooltip>
                                    </div>
                                )}
                            </div>

                            <Amount currency="KZT" minority={1} value={scheduleListItem.payment} />
                        </div>
                    </div>
                ))}

                <div className={styles.scheduleListFooterItem}>
                    <Partner partner={partner} />
                </div>
            </div>
        </div>
    );
};

export default PaymentScheduleForDesktop;
