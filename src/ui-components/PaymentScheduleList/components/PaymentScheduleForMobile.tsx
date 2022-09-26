import { Typography } from '@alfalab/core-components/typography';
import { Amount } from '@alfalab/core-components/amount';
import { InformationCircleLineSIcon } from '@alfalab/icons-glyph';
import { Button } from '@alfalab/core-components/button';
import { TooltipResponsive } from '@alfalab/core-components/tooltip/responsive';

import Summery from '../../Summery/Summery';
import Partner from '../../Partner/Partner';

import styles from '../PaymentSchedule.module.css';

const PaymentScheduleForMobile = (props: IPaymentScheduleListChildProps): JSX.Element => {
    const { SEQUENCE, convertDate, countPaymentTotalAmount, open, openDetail, partner, paymentSchedule } = props;

    return (
        <>
            <div className={styles.scheduleList}>
                <ul>
                    <li className={styles.scheduleFirstPayment}>
                        <Typography.Title className={styles.timePeriod} tag="h6">
                            Предоплата
                        </Typography.Title>

                        <Amount className={styles.amount} currency="KZT" minority={1} value={0} />
                    </li>

                    {paymentSchedule.map((scheduleListItem, index) => (
                        <li className={styles.scheduleListItem} key={index}>
                            <Typography.Title className={styles.title} tag="h6" view="xsmall">
                                {SEQUENCE[index]}
                            </Typography.Title>

                            <div>
                                <div>
                                    <Typography.Title tag="h6" view="xsmall">
                                        {convertDate(scheduleListItem.payday)}
                                    </Typography.Title>

                                    {index === 0 && (
                                        <div className={styles.details}>
                                            <TooltipResponsive
                                                content={
                                                    <div className={styles.mobileContent}>
                                                        <span>
                                                            График платежей может изменяться в зависимости от даты
                                                            доставки заказа
                                                        </span>
                                                    </div>
                                                }
                                                mobileActionButton={
                                                    <Button
                                                        block={true}
                                                        className={styles.closeBtn}
                                                        onClick={() => openDetail(Number(scheduleListItem.termId))}
                                                        size="s"
                                                        view="tertiary"
                                                    >
                                                        Закрыть
                                                    </Button>
                                                }
                                                onClose={() => openDetail(Number(scheduleListItem.termId))}
                                                onCloseDelay={100}
                                                onOpen={() => openDetail(Number(scheduleListItem.termId))}
                                                onOpenDelay={100}
                                                open={open === Number(scheduleListItem.termId)}
                                                position="right"
                                            >
                                                <InformationCircleLineSIcon className={styles.info} />
                                            </TooltipResponsive>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.amount_wrapper}>
                                    <Amount currency="KZT" minority={1} value={scheduleListItem.payment} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <Summery summary={countPaymentTotalAmount()} />
            </div>
            <Partner partner={partner} />
        </>
    );
};

export default PaymentScheduleForMobile;
