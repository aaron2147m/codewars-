function splitAndMerge(string, separator) {
    const str = string.split(' ');
    let result = [];
  
    str.forEach((word) => result.push(word.split('').join(separator)));
  
    return result.join(' ');
  }