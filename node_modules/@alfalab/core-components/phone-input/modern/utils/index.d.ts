/// <reference types="react" />
/**
 * Удаляет форматирование номера телефона
 * @param phone Номер телефона
 */
declare const deleteFormatting: (phone: string) => string;
declare function setCaretPosition({ position, inputRef, }: {
    position: number;
    inputRef: React.RefObject<HTMLInputElement>;
}): void;
declare function getInsertedNumber({ rawValue, clearableCountryCode, countryPrefix, previousConformedValue, }: {
    rawValue: string;
    clearableCountryCode: boolean;
    countryPrefix: string;
    previousConformedValue: string;
}): string;
export { deleteFormatting, setCaretPosition, getInsertedNumber };
