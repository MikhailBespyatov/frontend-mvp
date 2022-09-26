import axios, { AxiosPromise } from 'axios';

export default class HttpService {
    static baseUrl = process.env.NODE_ENV === 'development' ? '/proxy/' : '/bnpl/';
    static sendSmsUrl = '{preappId}/send-sms';
    static verifySmsUrl = '{preappId}/verify-sms';
    static statusUrl = '{preappId}/status';
    static cancelUrl = '{preappId}/cancel';
    static ecomUrl = '{preappId}/ecom_start';
    static proceedUrl = '{preappId}/proceed';
    static duplicateUrl = '{preappId}/duplicate';
    static cardLink = '{preappId}/cardLink';
    static uCards = '{preappId}/ucards';
    static useCardUrl = '{preappId}/use-card';
    static bins = 'card-bins';

    static preappId = '';

    static headers = {
        'Content-Type': 'application/json',
    };

    static proceed(): AxiosPromise {
        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.proceedUrl.replace('{preappId}', HttpService.preappId),
            headers: HttpService.headers,
        });
    }

    static duplicate(): AxiosPromise {
        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.duplicateUrl.replace('{preappId}', HttpService.preappId),
            headers: HttpService.headers,
        });
    }

    static sendSMS(requestModel: IUser): AxiosPromise {
        if (requestModel.preappId) {
            HttpService.preappId = requestModel.preappId.replace(/\s/g, '');
        }

        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.sendSmsUrl.replace('{preappId}', HttpService.preappId),
            data: JSON.stringify({
                iin: requestModel.iin,
                phoneNumber: requestModel.phoneNumber,
            }),
            headers: HttpService.headers,
        });
    }

    static verifySMS(code: ICode): AxiosPromise {
        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.verifySmsUrl.replace('{preappId}', HttpService.preappId),
            data: JSON.stringify(code),
            headers: HttpService.headers,
        });
    }

    static cancelOrder(): AxiosPromise {
        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.cancelUrl.replace('{preappId}', HttpService.preappId),
        });
    }

    static verifyOrder(): AxiosPromise {
        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.ecomUrl.replace('{preappId}', HttpService.preappId),
        });
    }

    static getStatus(preappId?: string): AxiosPromise {
        if (preappId) {
            HttpService.preappId = preappId;
        }

        return axios({
            method: 'get',
            url: HttpService.baseUrl + HttpService.statusUrl.replace('{preappId}', HttpService.preappId),
        });
    }

    static verifyCard(data: ICardData): AxiosPromise {
        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.cardLink.replace('{preappId}', HttpService.preappId),
            data,
        });
    }

    static getUCards(): AxiosPromise {
        return axios({
            method: 'get',
            url: HttpService.baseUrl + HttpService.uCards.replace('{preappId}', HttpService.preappId),
        });
    }

    static useCard(data: IUseCard): AxiosPromise {
        return axios({
            method: 'post',
            url: HttpService.baseUrl + HttpService.useCardUrl.replace('{preappId}', HttpService.preappId),
            data,
        });
    }

    static getBins(): AxiosPromise {
        return axios({
            method: 'get',
            url: HttpService.baseUrl + HttpService.bins,
        });
    }
}
