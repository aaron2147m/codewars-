//write a method (function) that will return true if its a valid single integer or floating number or false if its not.

const isDigit = str => !!str.trim() && !isNaN(str);