module.exports = function toReadable(number) {
    let num = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred"
    }
    if (number == 0) {
        return ("zero");
    } else if (number <= 19) {
        return (num[number]);
    } else {
        let a = num[Math.floor(number / 100) * 100];
        let b = num[Math.floor((number % 100) / 10) * 10];
        let c = num[Math.floor((number % 100) % 10)];
        if (a == undefined) a = "";
        if (b == undefined) b = "";
        if (c == undefined) c = "";
        if ((number % 100 >= 11) && (number % 100 <= 19)) {
            return (a + " " + num[Math.floor(number % 100)]).replace(/\s+/g, ' ').trim();
        } else {
            return (a + " " + b + " " + c).replace(/\s+/g, ' ').trim();
        };
    }
}