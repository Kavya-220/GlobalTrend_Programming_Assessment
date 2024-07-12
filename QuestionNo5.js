function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  // Example usage
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  const newArrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  console.log(newArrayWithoutDuplicates); 
  