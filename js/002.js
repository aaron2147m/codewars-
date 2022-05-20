function combat(health, damage) {
    let newHealth = health - damage
    console.log(newHealth)
    if (newHealth >=1){
      return newHealth 
    }
    else if (newHealth <= 0) {
      return 0
    }
  
  }