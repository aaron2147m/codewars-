//Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.



function isPythagoreanTriple(i) {
    i=i.sort((a,b)=>b-a)
   
   return i[0]**2==i[1]**2+i[2]**2
  }