/// <reference types="react" />
import React from 'react';
type Align = 'start' | 'end' | 'center';
type Direction = 'horizontal' | 'vertical';
type Size = 's' | 'm' | 'l' | number;
declare const SpaceContext: React.Context<{
    length: number;
    horizontalSize: number;
    verticalSize: number;
}>;
export { Align, Direction, Size, SpaceContext };
