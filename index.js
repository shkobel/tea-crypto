// Helper function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Example usage of helper functions
  console.log("Random Number between 1 and 100:", getRandomNumber(1, 100));
  console.log("Is 5 even?", isEven(5));
  console.log("Is 5 odd?", isOdd(5));
  console.log("Factorial of 5:", factorial(5));

  