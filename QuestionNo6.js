function capitalizeWords(str) {
    // Split the string into words based on spaces
    const words = str.split(' ');
    const capitalizedWords = [];
  
    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      // Capitalize the first letter of the word
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  
      // Push the capitalized word to the array
      capitalizedWords.push(capitalizedWord);
    }
  
    // Join the capitalized words into a single string with spaces
    return capitalizedWords.join(' ');
  }
  
  // Example usage
  const inputString = "hello world, how are you?";
  const capitalizedString = capitalizeWords(inputString);
  console.log(capitalizedString); 