//Finish the uefaEuro2016() function so it return string just like in the examples below:


function uefaEuro2016(teams, scores){
    let timeA = teams[0];
    let timeB = teams[1];
    let resultadoA = scores[0]
    let resultadoB = scores[1]
      
    if(resultadoA > resultadoB){
    return "At match "+ timeA +" - " + timeB + ", " + timeA + " won!";
    }
    else if (resultadoA < resultadoB){
    return "At match " + timeA + " - " + timeB + ", " + timeB + " won!";
    }
    else if (resultadoA === resultadoB){
    return "At match " + timeA +" - " + timeB +", teams played draw."
    }
    }