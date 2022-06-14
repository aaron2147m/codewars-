//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
    let con = usd * 6.75
    return `${con.toFixed(2)} Chinese Yuan`
  function chromosomeCheck(sperm) {
    if (sperm === "XX") {
      return "Congratulations! You're going to have a daughter."
    } else if (sperm === "XY") {
      return "Congratulations! You're going to have a son."
    } 
  }