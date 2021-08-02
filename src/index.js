module.exports = function toReadable(number) {
    function translatorToTwenty(number) {
        switch (number) {
            case 0:
                return "zero";
                break;
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
            case 10:
                return "ten";
                break;
            case 11:
                return "eleven";
                break;
            case 12:
                return "twelve";
                break;
            case 13:
                return "thirteen";
                break;
            case 14:
                return "fourteen";
                break;
            case 15:
                return "fifteen";
                break;
            case 16:
                return "sixteen";
                break;
            case 17:
                return "seventeen";
                break;
            case 18:
                return "eighteen";
                break;
            case 19:
                return "nineteen";
                break;

            default:
                break;
        }
    }
    function translatorFromTwelve(number) {
        switch (number) {
            case 2:
                return "twenty";
                break;
            case 3:
                return "thirty";
                break;
            case 4:
                return "forty";
                break;
            case 5:
                return "fifty";
                break;
            case 6:
                return "sixty";
                break;
            case 7:
                return "seventy";
                break;
            case 8:
                return "eighty";
                break;
            case 9:
                return "ninety";
                break;
            default:
                break;
        }
    }

    let numbers = [];
    let newNumber = [];
    numbers = number.toString().split("");
    if (number < 20) {
        return translatorToTwenty(number);
    }
    if (number > 109 && number < 920) {
        let decimal = `${number.toString()[1]}${number.toString()[2]}`;
        if (+decimal < 20) {
            numbers = [];
            numbers.push(number.toString()[0]);
            numbers.push("");
            numbers.push(`${number.toString()[1]}${number.toString()[2]}`);
        }
    }
    let counter = 0;

    for (let i = numbers.length - 1; i >= 0; i--) {
        switch (counter) {
            case 0:
                if (!+numbers[i]) {
                    break;
                }
                newNumber.unshift(translatorToTwenty(+numbers[i]));
                break;
            case 1:
                if (!+numbers[i]) {
                    break;
                }
                newNumber.unshift(translatorFromTwelve(+numbers[i]));
                break;
            case 2:
                newNumber.unshift(`${translatorToTwenty(+numbers[i])} hundred`);
                break;
            default:
                break;
        }
        counter++;
    }
    return newNumber.join(" ");
};
