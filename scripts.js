const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const screen = document.querySelector('#number-screen');
const operatorScreen = document.querySelector('#operator-screen');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals-button');
const deleteButton = document.querySelector('#delete-button');
const decimalButton = document.querySelector('#decimal-button');
let temp = 0; //Stores user's input
let lock = false; //when false, clicking operators won't run operate function
let operator;    //Stores the desired operation
let numClear = true;  //If true, clicking a number will clear the screen
let answer = 0

screen.textContent = '0'

//Outputs user input to calculator screen
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        if (numClear) {
            screen.textContent = '';
        }
        if (screen.textContent.length < 11){
        numClear = 0;
        screen.textContent += e.target.value;
        lock = false
        }
    });
} //Prints operator on calculator screen and stores it as a variable
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', (e) => {
        if (temp > 0 && !lock) {
            operate(temp, operator, screen.textContent)
        }
        if (screen.textContent != '0') {
            numClear = 1;
            temp = screen.textContent;
            operatorScreen.textContent = ` ${e.target.value} `;
            operator = e.target.value;
            lock = true
        }
    });
}
clearButton.addEventListener('click', () => {
    operatorScreen.textContent = '';
    screen.textContent = '0';
    temp == 0;
    numClear = 1;
    operator = 0;
});
equalsButton.addEventListener('click', () => {
    operate(temp, operator, screen.textContent)
})
deleteButton.addEventListener('click', () => {
    if (screen.textContent.length == 1) {
        numClear = 1;
        screen.textContent = '0';
    }
    else {
        screen.textContent = screen.textContent.slice(0, length - 1);
    }
})
decimalButton.addEventListener('click', () => {
    if (numClear) {
        screen.textContent = '';
    }
    if (!screen.textContent.includes('.')) {
        numClear = 0
        screen.textContent += '.';
    }
})
function operate(number1, operation, number2) {
    numClear = 1;
    operatorScreen.textContent = ''
    if (operation == '/' && number2 == 0) {
        screen.textContent = '(╯°□°）╯︵ ┻━┻';
    }
    else if (operation === '+') {
        screen.textContent = Number(number1) + Number(number2);
    }
    else if (operation === '-') {
        screen.textContent = Number(number1) - Number(number2);
    }
    else if (operation === '*') {
        screen.textContent = Number(number1) * Number(number2);
    }
    else if (operation === '/') {
        screen.textContent = Number(number1) / Number(number2)
    }
    temp = 0;
}