declare interface ISummary {
    summary: number;
}
declare interface ITitleProps {
    title: string | React.ReactNode;
}

declare interface IPartnerProps {
    partner: string;
}
declare interface IButtonProps {
    title: string;
    change: () => void;
    disable: boolean;
    btnType: string;
    dataTestId?: string;
}

declare interface IAgreementProps {
    title: string;
    linkUrl: string;
    linkedText: string;
    check: (isChecked: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    dataTestId?: string;
}

declare interface IPaymentScheduleList {
    partner: string;
}

declare interface IPaymentScheduleListChildProps {
    partner: string;
    open: number | undefined;
    openDetail: (id: number) => void;
    countPaymentTotalAmount: () => number;
    convertDate: (date: string) => string;
    SEQUENCE: string[];
    paymentSchedule: paymentSchedule[];
}

declare interface IInfoPage {
    title: string;
    text?: JSX;
    image: JSX;
}
declare interface IPaymentSchedule {
    termId: number;
    payday: string;
    payment: number;
}
declare interface IPayment {
    data: {
        partnerName: string;
        billNumber: string;
        terms: IPaymentSchedule[];
    };
}

declare interface ILoader {
    top: string;
}

declare interface IHeader {
    link: string;
}

declare interface IUserCard {
    abonentId: string;
    approved: string;
    cardMask: string;
}
