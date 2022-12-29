function uniTotal(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count += str.charCodeAt(i);
    }
    return count;
  }
  