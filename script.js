"use strict";

let oneMore;

const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number) && !/\s/g.test(number);
}

const bot = function () {

    let num = Math.round(Math.random() * 100);
    console.log(num);
    let k = 10;


    return function gues() {
        if (k == 0) {
            return oneMore = confirm("Игра окончена, хотели бы сыграть еще?");
        }

        let ans = prompt("Угадай число от 1 до 100", 54);
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
}

do {
    const startGame = bot();
    startGame();
} while (oneMore === true);

alert("Спасибо, что поиграли в мою игру");