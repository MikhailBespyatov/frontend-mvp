var preventAndStopEvent = function (event) {
    event.preventDefault();
    event.stopPropagation();
};

export { preventAndStopEvent };
