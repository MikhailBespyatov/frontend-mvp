import React from 'react';

function isChildInstanceOf(child, Component) {
    // мы не можем полагаться на child.type === Component, см. https://github.com/gaearon/react-hot-loader/issues/304
    return child.type === React.createElement(Component).type;
}

export { isChildInstanceOf };
