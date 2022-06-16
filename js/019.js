//You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

//Your function will accept three arguments:



function calculator(a,b,sign){

    if (sign == '+') {
      return a + b;
      
     } else if (sign == '-') {
       return a - b;
       
      } else if (sign == '/') {
      return a / b;
      
      } else if (sign == '*') {
      return a * b;
      
      } else {
      return "unknown value"
      }
  
  }