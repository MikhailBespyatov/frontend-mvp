export const PATTERNS = {
    iin: /^[0-9]{12}$/,
    phone: /^[7][7][0-9]{9}$/,
};

export const PLACEHOLDERS: IPlaceholders = {
    iin: '000 000 000 000',
    phone: '+7 (700) 000-00-00',
    cardNumber: '0000 0000 0000 0000',
    name: 'Имя владельца карты',
    cvv: '000',
    date: 'мм/гг',
};

export const MASKS: IMask = {
    iin: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
    phone: ['+', /\d/, ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
    cardNumber: [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
    cvv: [/\d/, /\d/, /\d/],
    date: [/\d/, /\d/, '/', /\d/, /\d/],
};
