function distanceBetweenPoints(a, b) {
    const katetX = Math.pow(a.x-b.x, 2)
    const katetY = Math.pow(a.y-b.y, 2)
  
    return Math.sqrt(katetX + katetY);
  }