import { FC } from 'react';
import { PlateProps } from "../../plate";
type AlertProps = Omit<PlateProps, 'foldable' | 'defaultFolded' | 'leftAddons'>;
declare const Alert: FC<AlertProps>;
export { AlertProps, Alert };
