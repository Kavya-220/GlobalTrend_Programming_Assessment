function flattenArray(arr) {
    let flattened = [];
  
    arr.forEach(item => {
      if (Array.isArray(item)) {
        flattened = flattened.concat(flattenArray(item));
      } else {
        flattened.push(item);
      }
    });
  
    return flattened;
  }
  
  // Example usage
  const nestedArray = [1, [2, [3, 4], 5], 6];
  const flattenedArray = flattenArray(nestedArray);
  console.log(flattenedArray);   