function arr2bin(arr){
    var sum = 0;
    arr.forEach(function(num){
      if(typeof num === 'number'){
        sum += num;
      }
    });
    return sum.toString(2);
  } 