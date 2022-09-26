import { useRef } from 'react';
import { useFocus } from '@alfalab/hooks';

/* eslint-disable @typescript-eslint/no-explicit-any */
const KeyboardFocusable = ({ children }) => {
    const targetRef = useRef(null);
    const [focused] = useFocus(targetRef, 'keyboard');
    return children(targetRef, focused);
};

export { KeyboardFocusable };
