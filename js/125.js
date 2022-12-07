function bigToSmall(a) {
    return [].concat(...a).sort((a,b)=>b-a).join(">");
  }