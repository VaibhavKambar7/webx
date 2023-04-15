function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}
function calculate(operation, a, b) {
    var result;
    switch (operation) {
        case "add":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
        default:
            throw new Error("Invalid operation");
    }
    return result;
}
console.log(calculate("add", 2, 3));
console.log(calculate("add", 'hello', ' world'));
console.log(calculate("subtract", 5, 2));
console.log(calculate("multiply", 4, 6));
console.log(calculate("divide", 10, 2));
console.log(calculate("divide", 10, 0));
