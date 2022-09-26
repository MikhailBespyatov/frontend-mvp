declare interface IPlaceholders {
    phone: string;
    iin: string;
    cardNumber: string;
    name: string;
    cvv: string;
    date: string;
}
declare interface IMask {
    phone: (RegExp | string)[];
    iin: (RegExp | string)[];
    cardNumber: (RegExp | string)[];
    cvv: (RegExp | string)[];
    date: (RegExp | string)[];
}

declare interface IError {
    hasError: boolean | null;
}

declare interface IErrorMessage {
    hasError: boolean;
    message: string;
}

declare interface IRedirectLink {
    data: { redirectLink: string };
}

declare interface IFinalResponse {
    data: {
        status: string;
        preappId: string;
        redirectLink: string;
        partnerName: string;
    };
}
