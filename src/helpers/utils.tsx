import { ErrorIcon } from 'components/Icons/ErrorIcon/ErrorIcon';
import { SuccessIcon } from 'components/Icons/SuccesIcon/SuccessIcon';

export const getBrowser = (): {
    name: string;
    version: number;
} => {
    const userAgent = navigator.userAgent,
        match = userAgent.match(/(opera|chrome|crios|safari|ucbrowser|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
        result: { name: string; version: number } = {
            name: '',
            version: 0,
        };
    let tem;

    if (/trident/i.test(match[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        result.name = 'Internet Explorer';
    } else if (match[1] === 'Chrome') {
        tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);

        if (tem && tem[1]) {
            result.name = tem[0].indexOf('Edge') === 0 ? 'Edge' : 'Opera';
        }
    }
    if (!result.name) {
        tem = userAgent.match(/version\/(\d+)/i); // iOS support
        result.name = match[0].replace(/\/.*/, '');

        if (result.name.indexOf('MSIE') === 0) {
            result.name = 'Internet Explorer';
        }
        if (userAgent.match('CriOS')) {
            result.name = 'Chrome';
        }
    }
    if (tem && tem.length) {
        match[match.length - 1] = tem[tem.length - 1];
    }

    result.version = Number(match[match.length - 1]);

    return result;
};

export const getIcon = (errorImage: boolean): JSX.Element => {
    return !errorImage ? <SuccessIcon /> : <ErrorIcon />;
};
