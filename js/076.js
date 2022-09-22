function oddOrEven(arr) {
   
    console.log(arr.reduce((sum,current) => sum + current, 0) % 2 ? 'odd' : 'even')

}
oddOrEven([0,-2,-5])