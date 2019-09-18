//
// ps1.p2.js - Problem Set 1, Problem 2
//
// name: Christopher Trinh
// email: ctrinh@bu.edu
//

// EXAMPLE:
// const expression = '8%3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator(expression)}`)

const evaluate = expr => {
    const operand = expr.split('')[1];
    if (operand == "%") {
        return parseInt(expr.split('')[0]) % parseInt(expr.split('')[2]);
    } else if (operand == "+") {
        return parseInt(expr.split('')[0]) + parseInt(expr.split('')[2]);
    } else if (operand == "-") {
        return parseInt(expr.split('')[0]) - parseInt(expr.split('')[2]);
    } else if (operand == "*") {
        return parseInt(expr.split('')[0]) * parseInt(expr.split('')[2]);
    } else if (operand == "/") {
        return parseInt(expr.split('')[0]) / parseInt(expr.split('')[2]);
    }
};

const expression0 = '4+2';
const expression1 = '5*7';
const expression2 = '6-1';
const expression3 = '9/2';

let operator = evaluate(expression0);
console.log(`${expression0} = ${operator}`);
operator = evaluate(expression1);
console.log(`${expression1} = ${operator}`);
operator = evaluate(expression2);
console.log(`${expression2} = ${operator}`);
operator = evaluate(expression3);
console.log(`${expression3} = ${operator}`);
