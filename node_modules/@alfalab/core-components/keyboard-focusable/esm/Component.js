import { useRef } from 'react';
import { useFocus } from '@alfalab/hooks';

/* eslint-disable @typescript-eslint/no-explicit-any */
var KeyboardFocusable = function (_a) {
    var children = _a.children;
    var targetRef = useRef(null);
    var focused = useFocus(targetRef, 'keyboard')[0];
    return children(targetRef, focused);
};

export { KeyboardFocusable };
