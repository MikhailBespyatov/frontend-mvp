type GalleryImage = {
    src: string;
    name?: string;
    previewSrc?: string;
    alt?: string;
    canDownload?: boolean;
};
type ImageMeta = {
    width: number;
    height: number;
    broken?: boolean;
};
export { GalleryImage, ImageMeta };
