/// <reference types="react" />
import * as React from 'react';
import { Direction } from "./utils";
interface ItemProps {
    className: string;
    horizontalSize: number;
    verticalSize: number;
    length: number;
    children: React.ReactNode;
    index: number;
    direction?: Direction;
    divider?: string | React.ReactNode;
    wrap?: boolean;
}
declare const Item: (props: ItemProps) => JSX.Element | null;
export { Item as default, ItemProps };
