const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let n = Math.floor(Math.random() * 100);
let c = 0;
console.log(n)

let guessTheNumber = () => {
    rl.question('Hi, угадай число, которое я загадал... \n',
    (userInput) => {
        if (!isNaN(userInput) && userInput.trim().length > 0) {
            if (parseInt(userInput) === n) {
                c += 1;
                console.log(`Вы угадали. Количество попыток ${c}`)
                rl.close();
            } else {
                if (parseInt(userInput) > n) {
                    c += 1;
                    guessTheNumber();
                    rl.setPrompt('Загаданное число меньше.  ');
                    rl.prompt();
                } else if (parseInt(userInput) < n) {
                    c += 1;
                    guessTheNumber();
                    rl.setPrompt('Загаданное число больше.  ');
                    rl.prompt();
                } else {
                    c += 1;
                    console.log(`Вы угадали. Количество попыток ${c}`)
                    rl.close();
                }
            }
        } else {
            c += 1;
            guessTheNumber();
            rl.setPrompt(`Введите число. ${userInput} - это не корректное значение.`);
            rl.prompt();
        }
    });
}

guessTheNumber()