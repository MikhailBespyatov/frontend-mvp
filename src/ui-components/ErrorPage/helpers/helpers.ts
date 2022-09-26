import { ERROR_CASES } from '../../../constants';

export default function isVerifyError(code: number): boolean {
    const { ACTIVE_POS_FOUND, DECLINE_PERIOD, UKK_FORBIDDEN } = ERROR_CASES;
    return [ACTIVE_POS_FOUND, DECLINE_PERIOD, UKK_FORBIDDEN].includes(code);
}
