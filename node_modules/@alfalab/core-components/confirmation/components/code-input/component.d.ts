/// <reference types="react" />
import React from 'react';
import { KeyboardEvent } from "react";
import { ContentAlign } from "../../component";
type CodeInputProps = {
    processing: boolean;
    value: string;
    slotsCount: number;
    error: boolean;
    className?: string;
    alignContent: ContentAlign;
    handleChange: (code: string) => void;
    handleInputKeyDown: (event: KeyboardEvent) => void;
};
declare const CodeInput: React.ForwardRefExoticComponent<CodeInputProps & React.RefAttributes<HTMLInputElement>>;
export { CodeInput };
