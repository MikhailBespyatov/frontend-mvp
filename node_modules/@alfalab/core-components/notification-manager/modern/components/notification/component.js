import { useCallback, useMemo, cloneElement } from 'react';
import cn from 'classnames';

const Notification = ({ element, className, onRemoveNotification, }) => {
    const { onClose, onCloseTimeout } = element.props;
    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        }
        onRemoveNotification(element.props.id);
    }, [onClose, onRemoveNotification, element.props.id]);
    const handleCloseTimeout = useCallback(() => {
        if (onCloseTimeout) {
            onCloseTimeout();
        }
        onRemoveNotification(element.props.id);
    }, [element.props.id, onCloseTimeout, onRemoveNotification]);
    const notificationProps = useMemo(() => ({
        ...element.props,
        visible: true,
        className: cn(className, element.props.className),
        usePortal: false,
        offset: 0,
        onClose: handleClose,
        onCloseTimeout: handleCloseTimeout,
    }), [element, handleClose, handleCloseTimeout, className]);
    return cloneElement(element, notificationProps);
};

export { Notification };
