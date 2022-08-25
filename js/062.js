//Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

function shortenToDate(longDate) {
    const [date, time] = longDate.split(',');
    return date;
  }