//Find the mean (average) of a list of numbers in an array.

function findAverage(nums) {
    return nums.reduce(function(a,b) {
      return a+b;
    }) / nums.length;
}