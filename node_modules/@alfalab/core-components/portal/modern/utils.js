const PORTAL_CONTAINER_ATTRIBUTE = 'alfa-portal-container';
function createPortalContainer() {
    const portalContainer = document.createElement('div');
    portalContainer.setAttribute(PORTAL_CONTAINER_ATTRIBUTE, '');
    document.body.appendChild(portalContainer);
    return portalContainer;
}
const getDefaultPortalContainer = () => document.querySelector(`[${PORTAL_CONTAINER_ATTRIBUTE}]`) || createPortalContainer();
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = value;
    }
}

export { PORTAL_CONTAINER_ATTRIBUTE, getDefaultPortalContainer, setRef };
