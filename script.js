"use strict";

const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number) && !/\s/g.test(number);
}

const bot = function () {

    let num = Math.round(Math.random() * 100);
    console.log(num);

    return function gues() {
        let ans = prompt("Угадай число от 0 до 100", 54);
        console.log(ans);

        switch (true) {

            case (ans === null):
                return alert("Игра окончена");
            case (!isNumber(ans)):
                alert("Введи число!");
                break;
            case (ans < num):
                alert("Загаданное число больше, попробуй ещё раз");
                break;
            case (ans > num):
                alert("Загаданное число меньше, попробуй ещё раз");
                break;
            default:
                return alert("Поздравляю, вы угадали");
        }
        gues();
    }
}

const startGame = bot();
startGame();