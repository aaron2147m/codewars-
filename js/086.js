//The function combines the first and last names and saves the value in "name" property

function NameMe(first, last) {
    this.firstName = first;
    this.lastName  = last;
    this.name = first + ' ' + last;
}