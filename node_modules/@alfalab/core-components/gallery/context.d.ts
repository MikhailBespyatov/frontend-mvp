/// <reference types="react" />
import SwiperCore from 'swiper';
import { GalleryImage, ImageMeta } from "./types";
type GalleryContext = {
    singleSlide: boolean;
    currentSlideIndex: number;
    images: GalleryImage[];
    imagesMeta: ImageMeta[];
    fullScreen: boolean;
    initialSlide: number;
    setFullScreen: (fullScreen: boolean) => void;
    setImageMeta: (meta: ImageMeta, index: number) => void;
    slideTo: (index: number) => void;
    slideNext: () => void;
    slidePrev: () => void;
    getSwiper: () => SwiperCore | undefined;
    setSwiper: (swiper: SwiperCore) => void;
    onClose: () => void;
    setCurrentSlideIndex: (index: number) => void;
    getCurrentImage: () => GalleryImage | undefined;
    getCurrentImageMeta: () => ImageMeta | undefined;
};
declare const GalleryContext: import("react").Context<GalleryContext>;
export { GalleryContext };
