//Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included)



function pipeFix(numbers){
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i+1]-1 && i < numbers.length-1 ) {
        numbers.splice(i+1,0,numbers[i]+1);
      } 
    }
    return numbers;
  }