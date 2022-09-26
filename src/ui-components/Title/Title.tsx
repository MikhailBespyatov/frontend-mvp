import { Typography } from '@alfalab/core-components/typography';

import style from './Title.module.css';

const Title = (props: ITitleProps): JSX.Element => {
    return (
        <Typography.Title className={style.title} tag="h1">
            {props.title}
        </Typography.Title>
    );
};

export default Title;
