function toTitleCase(str) {
    // Split the string into words based on spaces
    const words = str.split(' ');
    
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  
    // Join the words back into a single string
    return words.join(' ');
  }
  
  // Example usage
  const inputString = "hello world, how are you?";
  const titleCaseString = toTitleCase(inputString);
  console.log(titleCaseString); 
  