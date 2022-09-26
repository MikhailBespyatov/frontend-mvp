import { FC } from 'react';
import { GalleryImage } from "../../types";
type Props = {
    image: GalleryImage;
    index: number;
    active?: boolean;
    onSelect: (index: number) => void;
    className: string;
};
declare const ImagePreview: FC<Props>;
export { ImagePreview };
