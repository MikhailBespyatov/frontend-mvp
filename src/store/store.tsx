import {
  initialData,
  initialErrors,
} from "components/Steps/LinkingCard/constants";
import { atom } from "jotai";

import { ApplicationStep } from "./store.types";

export const _user = atom<IUser>({ iin: "", phoneNumber: "" });
export const _preappId = atom<string>("");
export const _expire = atom<string>("");
export const _partner = atom<string>("");
export const _partnerCode = atom<string>("");
export const _step = atom<number>(ApplicationStep.SCORING);
export const _redirectLinkToMarket = atom<string>("");
export const _paymentSchedule = atom<IPaymentSchedule[]>([]);
export const _countdownDuration = atom<number>(60000);
export const _cardRequestLink = atom<string>("");
export const _firstDayPay = atom<string>("");
export const _userCards = atom<IUserCard[]>([]);

export const _error = atom<boolean>(false);
export const _errorCode = atom<number>(0);

export const _cardData = atom(initialData);
export const _cardErrors = atom(initialErrors);

export const _activeSavedCard = atom<IUserCard | null>(null);

export const isDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
