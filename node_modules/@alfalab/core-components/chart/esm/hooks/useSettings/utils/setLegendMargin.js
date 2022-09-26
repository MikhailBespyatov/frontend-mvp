var setLegendMargin = function (brush, legend) {
    var top = 0;
    if (typeof (brush === null || brush === void 0 ? void 0 : brush.brushMargin) !== 'number' || !(legend === null || legend === void 0 ? void 0 : legend.verticalAlign))
        return top;
    if (legend.verticalAlign === 'top') {
        top = legend.marginTop ? Number(legend.marginTop * -1) : 0;
    }
    else {
        top = (legend === null || legend === void 0 ? void 0 : legend.marginTop) ? legend.marginTop + ((brush === null || brush === void 0 ? void 0 : brush.brushMargin) || 0) : brush === null || brush === void 0 ? void 0 : brush.brushMargin;
    }
    return top;
};

export { setLegendMargin };
