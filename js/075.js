//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


function createPhoneNumber(numbers) {
    let firstpart = ""
    let secondpart = ""
    let thirdpart = ""
    for (var i = 0; i < numbers.length; i++) {
        if (i < 3) {
            firstpart += numbers[i].toString()
        } else if (i >= 3 && i < 6) {
            secondpart += numbers[i].toString()
        } else if (i >= 6) {
            thirdpart += numbers[i].toString()
        }
    }
    return `(${firstpart}) ${secondpart}-${thirdpart}`
}   