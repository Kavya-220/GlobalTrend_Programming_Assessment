function evaluateExpression(expression) {
    let total = 0;
    let currentNumber = '';
    let operator = '+';
  
    for (let char of expression) {
      if (char === ' ') continue; // Skip spaces
      if (!isNaN(char)) {
        // If the character is a number, add it to the current number string
        currentNumber += char;
      } else if (char === '+' || char === '-') {
        // When we encounter an operator, calculate the current number
        if (operator === '+') {
          total += parseInt(currentNumber);
        } else {
          total -= parseInt(currentNumber);
        }
        // Update the operator and reset current number
        operator = char;
        currentNumber = '';
      }
    }
  
    // Add or subtract the last number
    if (operator === '+') {
      total += parseInt(currentNumber);
    } else {
      total -= parseInt(currentNumber);
    }
  
    return total;
  }
  
  // Example usage
  console.log(evaluateExpression("3 + 5 - 2"));
  console.log(evaluateExpression("10 - 4 + 2")); 