function colorOf(r,g,b){
    if (r < 16) {
        r = '0' + r.toString(16);
          } else { 
            r = r.toString(16); 
    };
    if (g < 16) {
        g = '0' + g.toString(16);
          } else {
            g = g.toString(16); 
    };
    if (b < 16){
        b = '0' + b.toString(16);
          } else {
            b = b.toString(16);
    };
    return '#'+r+g+b; 
  }