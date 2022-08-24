//Write a function which will return the days in the year and the year entered in a string

function yearDays(year)
{ 
  if(year % 400 === 0) {
    return year + ' has 366 days';
  }
  else if(year % 4 === 0 && year % 100 !== 0) { //centuries 
    return year + ' has 366 days';
  }
  else {
    return year + ' has 365 days'; 
  }
}