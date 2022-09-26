import { useAtom } from 'jotai';

import UIButton from 'ui-components/Button/Button';
import Title from 'ui-components/Title/Title';

import { ReactComponent as Img } from 'assets/images/screen5/screen5.svg';
import leftImg from 'assets/images/screen5/bg_left_img.svg';
import rightImg from 'assets/images/screen5/bg_right_img.svg';
import leftImgBlack from 'assets/images/black_mode/screen5/bg_left_img.svg';
import rightImgBlack from 'assets/images/black_mode/screen5/bg_right_img.svg';

import { isDarkMode, _partner, _redirectLinkToMarket } from 'store/store';

import styles from './StepFour.module.css';

const images = {
    leftImg: isDarkMode ? leftImgBlack : leftImg,
    rightImg: isDarkMode ? rightImgBlack : rightImg,
};

export default function StepFour(): JSX.Element {
    const [partner] = useAtom<string>(_partner);
    const [redirectLinkToMarket] = useAtom<string>(_redirectLinkToMarket);

    const handleChange = () => {
        window.location.href = redirectLinkToMarket;
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.desktop_bg_wrapper}>
                <img alt="Left gift" className={styles.leftBg} src={images.leftImg} />
            </div>
            <div className={styles.main_container}>
                <Img className={styles.mobileImg} />

                <Title title="Заказ успешно оформлен" />

                <p>
                    Магазин <span>{partner}</span> скоро свяжется c вами
                    <br /> для согласования доставки
                </p>
                <div className={styles.main_img}>
                    <Img className={styles.img} />
                    <UIButton
                        btnType="continue"
                        change={handleChange}
                        dataTestId="button-go-back"
                        disable={false}
                        title="Вернуться в магазин"
                    />
                </div>
            </div>

            <div className={styles.desktop_bg_wrapper}>
                <img alt="Right cloud" className={styles.rightBg} src={images.rightImg} />
            </div>
        </div>
    );
}
