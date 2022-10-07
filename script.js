"use strict";


const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number) && !/\s/g.test(number);
}

const bot = function () {

    let num = Math.round(Math.random() * 100);
    console.log(num);
    let k = 10;
    let oneMore;


    const gues = function () {

        if (k == 0) {
            return oneMore = confirm("Игра окончена, хотели бы сыграть еще?");
        }

        let ans = prompt("Угадай число от 0 до 100", 54);
        console.log(ans);

        switch (true) {
            case (ans === null):
                return oneMore = confirm("Игра окончена, хотели бы сыграть еще?");

            case (!isNumber(ans)):
                alert("Введи число!");
                break;

            case (ans < num):
                alert("Загаданное число больше, осталось " + k + " попыток");
                k--;
                break;

            case (ans > num):
                alert("Загаданное число меньше, осталось " + k + " попыток");
                k--;
                break;

            default:
                return oneMore = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        }
        gues();
    }

    gues();

    if (oneMore === true) {
        bot();
    } else if (oneMore === false) {
        alert("Спасибо, что поиграли в мою игру");
    }
}

bot();