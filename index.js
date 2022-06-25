 let firstNumber = prompt('Enter a Number');
let sign = prompt('Enter an Operator');
let secondNumber = prompt('Enter a second number');
let total = `${firstNumber} ${sign} ${secondNumber}`
alert(`${firstNumber} ${sign} ${secondNumber} = ${eval(total)}`);