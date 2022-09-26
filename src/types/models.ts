export interface PaymentScheduleProps {
    items: {
        payday: string;
        payment: number;
        termId: number;
    }[];
}

export interface SavedCardsProps {
    onClick?: () => void;
    hideBindButton?: boolean;
    cards?: IUserCard[];
}
