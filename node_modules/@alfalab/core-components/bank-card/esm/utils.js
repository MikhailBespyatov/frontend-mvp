/**
 * Проверяет номер карты по алгоритму Луна
 *
 * @param cardNumber - номер карты
 *
 */
function validateCardNumber(cardNumber) {
    var digits = cardNumber.replace(/\s+/g, '');
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
        var cardNum = parseInt(digits[i], 10);
        if (cardNum > 9)
            return false;
        if ((digits.length - i) % 2 === 0) {
            cardNum *= 2;
            if (cardNum > 9) {
                cardNum -= 9;
            }
        }
        sum += cardNum;
    }
    return sum % 10 === 0;
}

export { validateCardNumber };
