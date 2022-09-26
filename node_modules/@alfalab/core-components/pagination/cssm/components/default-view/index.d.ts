import { FC } from 'react';
import { PaginationProps } from "../../Component";
type DefaultViewProps = Pick<PaginationProps, 'sidePadding' | 'activePadding' | 'pagesCount' | 'currentPageIndex' | 'onPageChange'>;
declare const DefaultView: FC<DefaultViewProps>;
export { DefaultView };
