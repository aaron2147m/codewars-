function getAverage(marks){
    let sum = 0
    marks.forEach(i => sum+=i)
    return Math.floor(sum /= marks.length);
  }