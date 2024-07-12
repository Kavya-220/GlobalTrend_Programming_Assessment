function generateFibonacci(n) {
    // Initialize an empty array to store the Fibonacci sequence
    let fibSequence = [];
    
    // Handle edge cases where n is 0 or 1
    if (n <= 0) {
      return fibSequence;
    }
    
    if (n === 1) {
      fibSequence.push(0);
      return fibSequence;
    }
  
    // Add the first two numbers of the Fibonacci sequence
    fibSequence.push(0);
    fibSequence.push(1);
  
    // Generate the Fibonacci sequence up to the nth number using a while loop
    let i = 2;
    while (i < n) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
      i++;
    }
  
    // Return the sequence
    return fibSequence;
  }
  
  // Example usage
  const n = 10;
  const fibonacciSequence = generateFibonacci(n);
  console.log(fibonacciSequence);   