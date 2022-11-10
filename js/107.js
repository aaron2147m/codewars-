function* nextElementGenerator(array) {
    for (let i=0; i< Infinity; i++){
      yield array[i % array.length]
    }
  }