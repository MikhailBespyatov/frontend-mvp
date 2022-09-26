import { ReactComponent as stepOneMobileErrorPng } from 'assets/images/screen1/error_mobile.svg';
import { ReactComponent as stepTwoMobileErrorPng } from 'assets/images/screen2/smsLimit.svg';
import { ReactComponent as stepTwoInvalidDocument } from 'assets/images/screen2/invalidDocument.svg';
import { ReactComponent as stepVerifySmsDocument } from 'assets/images/screen2/verifySmsError.svg';
import { ReactComponent as stepThreeMobileErrorPng } from 'assets/images/screen3/error.svg';
import { ReactComponent as stepThreeEcomInternalMobileErrorPng } from 'assets/images/screen3/error_ecom_internal.svg';
import { ReactComponent as stepErrorOtherMerchantErrorPng } from 'assets/images/screen5/error_other_merchant.svg';
import { ReactComponent as taxDebtAboveLimit } from 'assets/images/screen2/taxDebtAboveLimit.svg';

import { ReactComponent as stepThreeEcomMobileErrorPngBlack } from 'assets/images/black_mode/screen3/ecomError.svg';
import { ReactComponent as stepErrorOtherMerchantErrorPngBlack } from 'assets/images/black_mode/screen5/error_other_merchant.svg';
import { ReactComponent as stepVerifySmsDocumentBlack } from 'assets/images/black_mode/screen2/verifySmsError.svg';
import { ReactComponent as taxDebtAboveLimitBlack } from 'assets/images/black_mode/screen2/taxDebtAboveLimit.svg';
import { ReactComponent as stepThreeMobileErrorPngBlack } from 'assets/images/black_mode/screen3/error.svg';
import { ReactComponent as stepTwoInvalidDocumentBlack } from 'assets/images/black_mode/screen2/invalidDocument.svg';
import { ReactComponent as stepTwoMobileErrorPngBlack } from 'assets/images/black_mode/screen2/smsLimit.svg';
import { ReactComponent as stepOneMobileErrorPngBlack } from 'assets/images/black_mode/screen1/error_mobile.svg';
import { ReactComponent as stepThreeEcomInternalMobileErrorPngBlack } from 'assets/images/black_mode/screen3/error_ecom_internal.svg';
import { ReactComponent as errBmgExceedBlack } from 'assets/images/black_mode/screen1/err_bmg_exceed.svg';

import { isDarkMode } from 'store/store';

export const stepOneErrorConfigs: IInfoPage = {
    title: 'Что-то пошло не так.',
    text: 'Попробуйте еще раз оформить покупку.',
    image: isDarkMode ? stepOneMobileErrorPngBlack : stepOneMobileErrorPng,
};

export const stepTwoErrorConfigs: IInfoPage = {
    title: 'Вы истратили все попытки ввода кода',
    text: <>Попробуйте оформить заказ чуть позже</>,
    image: isDarkMode ? stepTwoMobileErrorPngBlack : stepTwoMobileErrorPng,
};

export const stepTwoInvalidDocumentErrorConfigs: IInfoPage = {
    title: 'Вам нужно обновить удостоверение или паспорт',
    text: <>Перевыпустите документ онлайн в eGov. Оформление займет до двух недель</>,
    image: isDarkMode ? stepTwoInvalidDocumentBlack : stepTwoInvalidDocument,
};

export const stepTwoVerifySmsErrorConfigs: IInfoPage = {
    title: 'Недавно вы оформляли другие заявки',
    text: <>Придется немного подождать до оформления новой. Попробуйте вернуться через несколько недель</>,
    image: isDarkMode ? stepVerifySmsDocumentBlack : stepVerifySmsDocument,
};

export const stepTwoScoringTimeoutErrorConfigs: IInfoPage = {
    title: 'Слишком много запросов проверки ИИН и номера телефона',
    text: 'Попробуйте отправить новый запрос позднее',
    image: isDarkMode ? stepThreeMobileErrorPngBlack : stepThreeMobileErrorPng,
};

export const stepThreeErrorConfigs: IInfoPage = {
    title: 'К сожалению, вы не можете воспользоваться этим предложением',
    text: <>Попробуйте выбрать другой способ оплаты</>,
    image: isDarkMode ? stepErrorOtherMerchantErrorPngBlack : stepErrorOtherMerchantErrorPng,
};

export const stepThreeEcomErrorConfigs: IInfoPage = {
    title: 'Не удалось привязать карту',
    text: 'Проверьте остаток на счёте и попробуйте ещё раз, или воспользуйтесь другой картой для оплаты.',
    image: isDarkMode ? stepThreeEcomInternalMobileErrorPngBlack : stepThreeEcomInternalMobileErrorPng,
};

export const stepThreeEcomExceedErrorConfigs: IInfoPage = {
    title: 'Слишком много попыток привязки карты',
    text: (
        <>
            Вы превысили лимит привязок карты.
            <br /> Попробуйте ещё раз чуть позже
        </>
    ),
    image: isDarkMode ? stepThreeEcomMobileErrorPngBlack : stepThreeEcomInternalMobileErrorPng,
};

export const TaxDebtAboveLimitErrorConfigs: IInfoPage = {
    title: 'У вас есть налоговая задолженность',
    text: 'После погашения обновление информации о задолженности может занять до 2 недель.',
    image: isDarkMode ? taxDebtAboveLimitBlack : taxDebtAboveLimit,
};

export const ErrBmgExceed: IInfoPage = {
    title: 'Слишком много запросов проверки ИИН и номера телефона',
    text: <>Пожалуйста, попробуйте позже</>,
    image: isDarkMode ? errBmgExceedBlack : stepThreeMobileErrorPng,
};
