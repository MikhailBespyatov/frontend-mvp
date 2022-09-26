/// <reference types="react" />
declare function humanFileSize(size: string | number): string;
declare const getExtension: (filename: string) => string | undefined;
declare function fileIcon(filename: string): import("react").FC<import("react").SVGProps<SVGSVGElement>>;
export { humanFileSize, getExtension, fileIcon };
