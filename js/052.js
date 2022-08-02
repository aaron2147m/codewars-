//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.




function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}