"use strict";

const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number) && !/\s/g.test(number);
}

const bot = function () {

    let num = Math.round(Math.random() * 100);
    console.log(num);

    return function gues() {
        let ans = prompt("Угадай число от 1 до 100", 54);
        console.log(ans);

        if (ans === null) {
            return alert("Игра окончена");
        } else if (!isNumber(ans)) {
            alert("Введи число!");
            gues();
        }

        switch (true) {

            case (ans < num):
                alert("Загаданное число больше, попробуй ещё раз");
                gues();
                break;
            case (ans > num):
                alert("Загаданное число меньше, попробуй ещё раз");
                gues();
                break;
            default:
                alert("Поздравляю, вы угадали");
                break;
        }
    }
}

const startGame = bot();
startGame();