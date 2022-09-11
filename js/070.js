//returning true if exactly one of the two expressions evaluate to true, false otherwise.



function xor(a, b) {
    if ((a === true) && (b !== true)){
    return true
    } else if ((a !== true) && (b === true)){
    return true
    } else {
    return false
    }
  }