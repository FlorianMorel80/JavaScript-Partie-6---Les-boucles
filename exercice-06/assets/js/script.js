let firstNumber = 10;
let secondNumber = 8;


while (firstNumber > 1) {
    document.write('<div>' + firstNumber / secondNumber + '</div>');
    firstNumber += firstNumber / secondNumber;
}