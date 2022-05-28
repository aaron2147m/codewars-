const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    
    if ((mpg * fuelLeft)/distanceToPump>=1)
    {
      return true;
    }
    return false;
  };