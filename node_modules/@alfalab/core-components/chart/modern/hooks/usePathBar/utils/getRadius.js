const getRadius = (height, radius) => {
    const result = radius && height / 2 < radius ? Math.ceil(height / 2) : radius || 0;
    return result;
};

export { getRadius };
