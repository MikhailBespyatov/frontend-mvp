const preventAndStopEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
};

export { preventAndStopEvent };
