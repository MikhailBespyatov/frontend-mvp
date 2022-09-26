import React from 'react';

var PointIcon = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? '#5A8ECF' : _b, _c = _a.height, height = _c === void 0 ? 16 : _c;
    return (React.createElement("svg", { height: height, viewBox: '0 0 18 18' },
        React.createElement("circle", { cx: '9', cy: '9', r: '9', strokeWidth: '1', fill: fill, fillOpacity: '0.4' }),
        React.createElement("circle", { cx: '9', cy: '9', r: '3', strokeWidth: '2', stroke: '#fff', fill: fill })));
};

export { PointIcon };
