
//merge arrays


function mergeArrays(arr1, arr2){
    var newArray = [];
    newArray = newArray.concat(arr1);
    for (var i = 0; i< arr2.length; i++) {
      if (newArray.indexOf(arr2[i]) === -1){
      newArray.push(arr2[i]);
      }
    }
    return newArray.sort(function(a,b){
      return a-b;
    });
  }
  