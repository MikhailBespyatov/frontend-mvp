import cloudOne from 'assets/images/screen1/cloud_one.svg';
import cloudTwo from 'assets/images/screen1/cloud_two.svg';
import cloudThree from 'assets/images/screen1/cloud_three.svg';
import cloudOneBlack from 'assets/images/black_mode/screen1/cloud_one.svg';
import cloudTwoBlack from 'assets/images/black_mode/screen1/cloud_two.svg';
import cloudThreeBlack from 'assets/images/black_mode/screen1/cloud_three.svg';

import { isDarkMode } from 'store/store';

export const clouds = {
    one: isDarkMode ? cloudOneBlack : cloudOne,
    two: isDarkMode ? cloudTwoBlack : cloudTwo,
    three: isDarkMode ? cloudThreeBlack : cloudThree,
};
