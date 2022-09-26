import { useState, useEffect } from 'react';
import { getRadius } from './utils/getRadius.js';

const usePathBar = (props) => {
    const [topRadius, setTopRadius] = useState(0);
    const [bottomRadius, setBottomRadius] = useState(0);
    const [initHeight, setInitHeight] = useState(0);
    const [initY, setInitY] = useState(0);
    useEffect(() => {
        const { radius, height, background, y } = props;
        const radiusTop = radius?.top ? getRadius(height, radius.top) : 0;
        const radiusBottom = radius?.bottom ? getRadius(height, radius.bottom) : 0;
        const heightCheck = (radius && height !== 0 && height / 2 < (radius?.top || 0)) ||
            height / 2 < (radius?.bottom || 0);
        // eslint-disable-next-line no-nested-ternary
        const heightInit = heightCheck
            ? (radiusTop || radiusBottom) && radiusTop + radiusBottom
            : height > 0 && height < 2
                ? 2
                : height;
        if (background && y) {
            const yInit = heightCheck
                ? background.height + background.y - (radiusTop + radiusBottom)
                : y;
            setInitY(yInit);
        }
        if (radiusTop !== 0)
            setTopRadius(radiusTop);
        if (radiusBottom !== 0)
            setBottomRadius(radiusBottom);
        if (heightInit !== 0)
            setInitHeight(heightInit);
    }, [props]);
    return [initHeight, topRadius, bottomRadius, initY];
};

export { usePathBar };
