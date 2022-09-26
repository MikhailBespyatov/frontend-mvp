import { useState } from 'react';
import { useAtom } from 'jotai';
import { Mq } from '@alfalab/core-components/mq';

import PaymentScheduleForMobile from './components/PaymentScheduleForMobile';
import PaymentScheduleForDesktop from './components/PaymentScheduleForDesktop';

import { _paymentSchedule } from '../../store/store';

import { MONTHS, SEQUENCE } from '../../constants';

import styles from './PaymentSchedule.module.css';

const PaymentScheduleList = (props: IPaymentScheduleList): JSX.Element => {
    const [open, setOpen] = useState<number>();
    const [paymentSchedule] = useAtom<IPaymentSchedule[]>(_paymentSchedule);

    const openDetail = (id: number) => {
        if (open === id) {
            setOpen(-1);
        } else {
            setOpen(id);
        }
    };

    const countPaymentTotalAmount = () => {
        let amount = 0;

        paymentSchedule.forEach((f) => (amount += f.payment));
        return amount;
    };

    const convertDate = (date: string) => {
        const newDate = new Date(date);

        return `До ${newDate.getDate()} ${MONTHS[newDate.getMonth()]}`;
    };

    return (
        <>
            <Mq query="--mobile">
                <div className={styles.mobile_wrapper}>
                    <PaymentScheduleForMobile
                        SEQUENCE={SEQUENCE}
                        convertDate={convertDate}
                        countPaymentTotalAmount={countPaymentTotalAmount}
                        open={open}
                        openDetail={openDetail}
                        partner={props.partner}
                        paymentSchedule={paymentSchedule}
                    />
                </div>
            </Mq>
            <Mq query="--tablet">
                <div className={styles.desktop_wrapper}>
                    <PaymentScheduleForDesktop
                        SEQUENCE={SEQUENCE}
                        convertDate={convertDate}
                        countPaymentTotalAmount={countPaymentTotalAmount}
                        open={open}
                        openDetail={openDetail}
                        partner={props.partner}
                        paymentSchedule={paymentSchedule}
                    />
                </div>
            </Mq>
            <Mq query="--desktop">
                <div className={styles.desktop_wrapper}>
                    <PaymentScheduleForDesktop
                        SEQUENCE={SEQUENCE}
                        convertDate={convertDate}
                        countPaymentTotalAmount={countPaymentTotalAmount}
                        open={open}
                        openDetail={openDetail}
                        partner={props.partner}
                        paymentSchedule={paymentSchedule}
                    />
                </div>
            </Mq>
        </>
    );
};

export default PaymentScheduleList;
