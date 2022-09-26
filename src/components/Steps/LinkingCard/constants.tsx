import visa from 'assets/images/linking_card/visa.svg';
import mc from 'assets/images/linking_card/mc.svg';

export const MONTHS = {
    '01': 'янв',
    '02': 'фев',
    '03': 'мар',
    '04': 'апр',
    '05': 'мая',
    '06': 'июня',
    '07': 'июля',
    '08': 'авг',
    '09': 'сен',
    '10': 'окт',
    '11': 'ноя',
    '12': 'дек',
};

export const CARD_NEEDED_NUMBER = 16;

export const FIVE_MONTH = 13149000000;

export const CVV_NEEDED_NUMBER = 3;

export const START_DATE = new Date().getFullYear().toString().slice(0, 2);

export const initialData = {
    card_name: '',
    card_no_bin: '',
    exp_month: '',
    exp_year: '',
    sec_cvv2: '',
};

export const initialErrors = {
    cardNameError: false,
    cardNoBinError: false,
    dateError: false,
    secCvv2Error: false,
};

export const cardNoBinValidate = (value: string): boolean => value.length === CARD_NEEDED_NUMBER;

export const cvvValidate = (value: string): boolean => value.length === CVV_NEEDED_NUMBER;

export const nameValidate = (value: string): boolean => Boolean(value);

export const dateValidity = (exp_month: string, exp_year: string): boolean => {
    if (Number(exp_month) > 12) {
        return false;
    }
    return new Date().getTime() + FIVE_MONTH - new Date(Number(exp_year), Number(exp_month) - 1).getTime() < 0;
};

export const isIncorrectDate = (exp_month: string): boolean => !exp_month || Number(exp_month) > 12;

export const getFormErrors = (data: ICardData): ICardDataErrors => {
    let errors = initialErrors;
    if (!cardNoBinValidate(data.card_no_bin)) {
        errors = { ...errors, cardNoBinError: true };
    }
    if (!cvvValidate(data.sec_cvv2)) {
        errors = { ...errors, secCvv2Error: true };
    }
    if (!nameValidate(data.card_name)) {
        errors = { ...errors, cardNameError: true };
    }
    if (!dateValidity(data.exp_month, data.exp_year)) {
        errors = { ...errors, dateError: true };
    }
    return errors;
};

interface Props {
    src: string;
    alt?: string;
}

const CardImg = (props: Props): JSX.Element => {
    return <img width={46} {...props} />;
};

export const CARD_TYPES: {
    [key: string]: JSX.Element;
} = {
    4: <CardImg alt="карта виза" src={visa} />,
    5: <CardImg alt="карта мастеркард" src={mc} />,
};

export const getPaydayDate = (payday: string): string => {
    const day = payday.split('T')[0].split('-')[2];
    const month = MONTHS[payday.split('T')[0].split('-')[1] as keyof typeof MONTHS];
    const date = `${day} ${month}`;
    return date;
};
