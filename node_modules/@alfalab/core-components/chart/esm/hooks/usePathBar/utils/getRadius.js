var getRadius = function (height, radius) {
    var result = radius && height / 2 < radius ? Math.ceil(height / 2) : radius || 0;
    return result;
};

export { getRadius };
