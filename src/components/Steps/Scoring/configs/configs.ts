import { ReactComponent as Screen1 } from 'assets/images/scoring/screen1.svg';
import { ReactComponent as Screen2 } from 'assets/images/scoring/screen2.svg';
import { ReactComponent as Screen3 } from 'assets/images/scoring/screen3.svg';
import { ReactComponent as Screen4 } from 'assets/images/scoring/screen4.svg';

import { ReactComponent as Screen1Black } from 'assets/images/black_mode/scoring/screen1.svg';
import { ReactComponent as Screen2Black } from 'assets/images/black_mode/scoring/screen2.svg';
import { ReactComponent as Screen3Black } from 'assets/images/black_mode/scoring/screen3.svg';
import { ReactComponent as Screen4Black } from 'assets/images/black_mode/scoring/screen4.svg';
import { isDarkMode } from 'store/store';

const screen1: IInfoPage = {
    title: 'Ищем данные',
    image: isDarkMode ? Screen1Black : Screen1,
};

const screen2: IInfoPage = {
    title: 'Запускаем наши алгоритмы',
    image: isDarkMode ? Screen2Black : Screen2,
};

const screen3: IInfoPage = {
    title: 'Проверяем кредитную историю',
    image: isDarkMode ? Screen3Black : Screen3,
};

const screen4: IInfoPage = {
    title: 'Сверяемся с магазином',
    image: isDarkMode ? Screen4Black : Screen4,
};

export default [screen1, screen2, screen3, screen4];
