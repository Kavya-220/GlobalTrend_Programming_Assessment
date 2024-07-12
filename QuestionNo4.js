function areAnagrams(str1, str2) {
    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Sort both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage
  console.log(areAnagrams("listen", "silent")); 
  console.log(areAnagrams("hello", "world"));   