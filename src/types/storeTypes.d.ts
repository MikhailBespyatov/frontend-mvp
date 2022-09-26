declare interface IUser {
    iin: string;
    phoneNumber: string;
    preappId?: string;
    checked?: boolean;
}

declare interface ICode {
    code: string;
}

declare interface ICardData {
    card_name: string;
    card_no_bin: string;
    exp_month: string;
    exp_year: string;
    sec_cvv2: string;
}

declare interface IUseCard {
    cardMask: string;
    abonentId: string;
    approved: string;
}

declare interface ICardDataErrors {
    cardNameError: boolean;
    cardNoBinError: boolean;
    dateError: boolean;
    secCvv2Error: boolean;
}
