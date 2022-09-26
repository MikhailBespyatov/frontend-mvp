import { FC } from 'react';
type OverlayProps = {
    /**
     * Подпись для заглушки
     */
    text?: string;
    /**
     * Управление видимостью
     */
    visible?: boolean;
};
declare const Overlay: FC<OverlayProps>;
export { OverlayProps, Overlay };
