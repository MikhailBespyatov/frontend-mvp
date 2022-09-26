import React from 'react';

var FilledCircleIcon = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? '#5A8ECF' : _b, _c = _a.height, height = _c === void 0 ? 16 : _c;
    return (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', height: height, viewBox: '0 0 22 22', fill: 'none' },
        React.createElement("circle", { cx: '11', cy: '11', r: '10', fill: 'url(#paint0_linear)', stroke: fill, strokeWidth: '2' }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: 'paint0_linear', x1: '11', y1: '1', x2: '11', y2: '21', gradientUnits: 'userSpaceOnUse' },
                React.createElement("stop", { stopColor: fill, stopOpacity: '0.2' }),
                React.createElement("stop", { offset: '1', stopColor: fill, stopOpacity: '0' })))));
};

export { FilledCircleIcon };
