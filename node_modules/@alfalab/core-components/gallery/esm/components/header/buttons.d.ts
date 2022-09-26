import { FC, MutableRefObject } from 'react';
import { IconButtonProps } from "../../../../icon-button";
type Props = Omit<IconButtonProps, 'icon' | 'colors'> & {
    buttonRef?: MutableRefObject<HTMLButtonElement | null>;
    download?: string | boolean;
};
declare const Fullscreen: FC<Props>;
declare const ExitFullscreen: FC<Props>;
declare const Download: FC<Props>;
declare const Exit: FC<Props>;
export { Fullscreen, ExitFullscreen, Download, Exit };
