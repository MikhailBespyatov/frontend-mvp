/**
 * Начиная с указанного индекса, заменяет элементы исходного массива
 */
var mergeArrays = function (_a) {
    var sourceArray = _a.sourceArray, targetArray = _a.targetArray, startIndex = _a.startIndex, resultArrayLength = _a.resultArrayLength;
    var insertedElemIndex = 0;
    var result = new Array(resultArrayLength).fill('');
    return result.map(function (_, index) {
        if (index < startIndex) {
            return sourceArray[index] || '';
        }
        // eslint-disable-next-line no-plusplus
        return targetArray[insertedElemIndex++] || sourceArray[index] || '';
    });
};

export { mergeArrays };
