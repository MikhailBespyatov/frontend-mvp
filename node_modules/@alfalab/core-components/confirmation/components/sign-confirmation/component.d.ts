/// <reference types="react" />
import React from 'react';
import { FC, MutableRefObject, ReactNode } from "react";
import { ContentAlign } from "../../component";
type SignConfirmationProps = {
    codeChecking: boolean;
    codeSending: boolean;
    smsHintVisible: boolean;
    requiredCharAmount: number;
    countdownDuration: number;
    additionalContent: React.ReactNode;
    hasPhoneMask: boolean;
    phone?: string;
    code: string;
    errorText: string;
    error: boolean;
    title: string | React.ReactNode;
    codeCheckingText: string;
    codeSendingText: string;
    hasSmsCountdown: boolean;
    inputRef: MutableRefObject<HTMLInputElement | null>;
    alignContent: ContentAlign;
    noAttemptsLeftMessage?: string;
    buttonRetryText: string;
    countdownContent?: ReactNode;
    onInputFinished: ({ code }: {
        code: string;
    }) => void;
    onInputChange: ({ code }: {
        code: string;
    }) => void;
    onSmsRetryClick: (event: React.MouseEvent) => void;
    onCountdownFinished: () => void;
    onSmsHintLinkClick: (event: React.MouseEvent) => void;
};
declare const SignConfirmation: FC<SignConfirmationProps>;
export { SignConfirmationProps, SignConfirmation };
