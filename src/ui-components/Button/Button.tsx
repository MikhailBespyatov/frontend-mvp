import { Button } from '@alfalab/core-components/button';
import cn from 'classnames';
import styles from './Button.module.css';

const UIButton = (props: IButtonProps): JSX.Element => {
    const changeStep = () => {
        props.change();
    };

    return (
        <div className={`${styles.button_wrapper}`}>
            <div className={`${props.btnType === 'cancel' ? styles.cancel : styles.continue}`}>
                <Button
                    block={true}
                    className={cn(styles.button, { [styles.disabled]: props.disable })}
                    dataTestId={props.dataTestId}
                    disabled={props.disable}
                    onClick={changeStep}
                    size="s"
                    view="tertiary"
                >
                    {props.title}
                </Button>
            </div>
        </div>
    );
};

export default UIButton;
