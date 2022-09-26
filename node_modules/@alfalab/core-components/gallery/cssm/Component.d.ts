import { FC } from 'react';
import { GalleryImage } from "./types";
type GalleryProps = {
    /**
     * Управление видимостью
     */
    open: boolean;
    /**
     * Массив изображений
     */
    images: GalleryImage[];
    /**
     * Зациклить галерею
     * @default true
     */
    loop?: boolean;
    /**
     * Индекс открытого изображение
     * @default 0
     */
    initialSlide?: number;
    /**
     * Обработчик закрытия
     */
    onClose: () => void;
};
declare const Gallery: FC<GalleryProps>;
export { GalleryProps, Gallery };
