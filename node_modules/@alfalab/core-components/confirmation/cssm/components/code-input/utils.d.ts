/**
 * Начиная с указанного индекса, заменяет элементы исходного массива
 */
declare const mergeArrays: ({ sourceArray, targetArray, startIndex, resultArrayLength, }: {
    sourceArray: string[];
    targetArray: string[];
    startIndex: number;
    resultArrayLength: number;
}) => string[];
export { mergeArrays };
