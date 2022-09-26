import { FC } from 'react';
import { PaginationProps } from "../../Component";
type PerPageViewProps = Pick<PaginationProps, 'pagesCount' | 'currentPageIndex'>;
declare const PerPageView: FC<PerPageViewProps>;
export { PerPageView };
