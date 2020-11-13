let firstNumber = 2;
let secondNumber = 1;


while (secondNumber < 250) {
    document.write('<div>' + firstNumber * secondNumber + '</div>');
    secondNumber += firstNumber * secondNumber;
}