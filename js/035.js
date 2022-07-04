function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sharkTime = sharkDistance/sharkSpeed;
    let youTime = pontoonDistance/youSpeed;
    if (youTime < sharkTime  ) {
      return "Alive!"
    } else if ( youTime/2 <= sharkTime && dolphin == true){
      return "Alive!"
    }else {
      return "Shark Bait!"
    }
  }