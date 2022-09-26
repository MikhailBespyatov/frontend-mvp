import { RefObject } from 'react';
type Args = {
    inputRef: RefObject<HTMLInputElement>;
    countryCodeLength: number;
    clearableCountryCode: boolean;
};
declare function useCaretAvoidCountryCode({ inputRef, countryCodeLength, clearableCountryCode, }: Args): void;
export { useCaretAvoidCountryCode };
