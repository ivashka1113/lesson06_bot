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
            return confirm("Игра окончена, хотели бы сыграть еще?") ? bot() : alert("Спасибо, что поиграли в мою игру");
        }

        let ans = prompt("Угадай число от 0 до 100", 54);
        console.log(ans);

        switch (true) {
            case (ans === null):
                return confirm("Игра окончена, хотели бы сыграть еще?") ? bot() : alert("Спасибо, что поиграли в мою игру");

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
                return confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?") ? bot() : alert("Спасибо, что поиграли в мою игру");
        }
        gues();
    }
    gues();
}

bot();