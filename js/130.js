function eachCons(array, n) {
    let cascadingSubset = [];
    for( i = 0; i <= array.length - n; i++){
      cascadingSubset.push(array.slice(i, i + n ));
    }
      return cascadingSubset;
  }