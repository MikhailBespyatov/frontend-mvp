import { useState, useEffect } from 'react';
import { setComposedChartsMargin } from './utils/setComposedChartsMargin.js';
import { setDatas } from './utils/setDatas.js';
import { setGradientCharts } from './utils/setGradientCharts.js';
import { setLegendMargin } from './utils/setLegendMargin.js';
import { sortByIndex } from './utils/sortByIndex.js';

const useSettings = (options) => {
    const [state, setState] = useState(null);
    const [charts, setCharts] = useState({});
    const [data, setData] = useState([]);
    const [filterCount, setFilterCount] = useState(0);
    useEffect(() => {
        const settings = { ...options };
        const { brush, legend, series, labels, composeChart, xAxis } = settings;
        if (settings.legend?.margin && brush && legend)
            settings.legend.margin.top = setLegendMargin(brush, legend);
        settings.series = setGradientCharts(series);
        const [initData, chartsNames, count] = setDatas(settings.series, labels);
        settings.composeChart.margin = setComposedChartsMargin(composeChart, legend, brush, xAxis);
        settings.series = sortByIndex(settings.series);
        setState(settings);
        setData(initData);
        setCharts(chartsNames);
        setFilterCount(count);
    }, [options]);
    return [
        {
            state,
            data,
            charts,
            filterCount,
        },
        {
            setState,
            setData,
            setCharts,
            setFilterCount,
        },
    ];
};

export { useSettings };
