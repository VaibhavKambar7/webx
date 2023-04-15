function add(a: number, b: number): number {
    return a + b;
  }
  
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  
  function divide(a: number, b: number): number | never {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
  
  
  function calculate(operation: string, a: any, b: any): number | never {
    let result: number;
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
  