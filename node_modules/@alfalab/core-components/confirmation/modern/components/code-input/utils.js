/**
 * Начиная с указанного индекса, заменяет элементы исходного массива
 */
const mergeArrays = ({ sourceArray, targetArray, startIndex, resultArrayLength, }) => {
    let insertedElemIndex = 0;
    const result = new Array(resultArrayLength).fill('');
    return result.map((_, index) => {
        if (index < startIndex) {
            return sourceArray[index] || '';
        }
        // eslint-disable-next-line no-plusplus
        return targetArray[insertedElemIndex++] || sourceArray[index] || '';
    });
};

export { mergeArrays };
