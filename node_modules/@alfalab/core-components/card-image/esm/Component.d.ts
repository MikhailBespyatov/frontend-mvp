import { FC } from 'react';
declare const ASPECT_RATIO = 0.63;
declare const DEFAULT_WIDTH = 280;
declare const DEFAULT_BASE_URL = "https://online.alfabank.ru/cards-images/cards/";
type CardImageProps = {
    /**
     * Идентификатор карты
     * (например: ER, GQ, SU)
     */
    cardId?: string;
    /**
     * Какие слои показывать, через запятую без пробелов
     * (полный набор: BACKGROUND,CARD_NUMBER,CARD_HOLDER,PAY_PASS,CHIP,LOGO,PAYMENT_SYSTEM,RESERVED_1,RESERVED_2,VALID_DATE)
     */
    layers?: string;
    /**
     * Ширина изображения
     */
    width?: number;
    /**
     * Скругление углов
     */
    rounded?: boolean;
    /**
     * Базовый URL сервиса с изображениями
     */
    baseUrl?: string;
    /**
     * Колбек, вызываемый при загрузке изображения
     */
    onLoad?: () => void;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    alt?: string;
    /**
     * Уникальный идентификатор блока
     */
    id?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
declare const CardImage: FC<CardImageProps>;
export { ASPECT_RATIO, DEFAULT_WIDTH, DEFAULT_BASE_URL, CardImageProps, CardImage };
