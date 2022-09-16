function productArray(numbers){
    let result = numbers.map((ind,i)=> {
      return ind = (numbers.reduce((acc,int) => acc * int ))/ind
      })
      
        
     console.log(result)
   return result
   }