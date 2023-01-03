module.exports = function toReadable (number) {
    let single_digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let double_digits = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let multiples_of_ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let three_four_digits = ['hundred', 'thousand'];
    let digits = number.toString().length;

    if (digits == 1 && number >= 0 && number < 10) {
        return single_digits[number];
    } // 0, 1..9

    else if (digits == 2 && number >= 10 && number < 20) {
        return double_digits[number - 9];
    } // 11, 12..19

    else if (digits == 2 && number >= 20 && number < 100 && number % 10 === 0) {
        return multiples_of_ten[number / 10];
    } // 20, 30..40

    else if (digits == 2 && number > 20 && number < 100 && number % 10 !== 0) {
        return multiples_of_ten[number.toString().charAt(0)] + ' ' + single_digits[number % 10];
    } // 21, 32..94

    else if (digits == 3 && number >= 100 && number < 1000 && number % 100 === 0) {
        return single_digits[number / 100] + ' ' + three_four_digits[0];
    } // 100, 200..900

    else if (digits == 3 && number > 100 && number < 1000 && number.toString().charAt(1) == 1 && number % 10 === 0) {
        return single_digits[(number - number % 100) / 100] + ' ' + three_four_digits[0] + ' ' + double_digits[number.toString().charAt(1)];
    } // 110, 210..910

    else if (digits == 3 && number > 100 && number < 1000 && number.toString().charAt(1) == 1 && number % 10 !== 0) {
        return single_digits[(number - number % 100) / 100] + ' ' + three_four_digits[0] + ' ' + double_digits[(number - number.toString().charAt(0) * 100 - number.toString().charAt(1) * 10) + 1];
    } // 111, 211..911

    for (let i = 1; i < 10; i++) {
        if (digits == 3 && number > 100 && number < 1000 && number.toString().charAt(1) == 0 && number % 10 !== 0) {
            return single_digits[(number - number % 100) / 100] + ' ' + three_four_digits[0] + ' ' + single_digits[number.toString().charAt(i + 1)];
        } // 902, 903..904

        else if (digits == 3 && number > 100 && number < 1000 && number % 10 === 0) {
            return single_digits[(number - number % 100) / 100] + ' ' + three_four_digits[0] + ' ' + multiples_of_ten[number.toString().charAt(i)];
        } // 920, 930..990

        else if (digits == 3 && number > 100 && number < 1000 && number % 10 !== 0) {
            return single_digits[(number - number % 100) / 100] + ' ' + three_four_digits[0] + ' ' + multiples_of_ten[number.toString().charAt(i)] + ' ' + single_digits[number.toString().charAt(i + 1)];
        } // 922, 933..994
    }
};
