const SEPARATION_POSITION_SHIFT = 3;
function splitFilename(filename) {
    const dotPosition = filename.lastIndexOf('.');
    let head = filename;
    let tail = '';
    const splitPosition = dotPosition - SEPARATION_POSITION_SHIFT;
    if (splitPosition > 0) {
        head = filename.slice(0, splitPosition);
        tail = filename.slice(splitPosition);
    }
    return [head, tail];
}

export { splitFilename };
