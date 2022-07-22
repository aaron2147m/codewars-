function slope(points){
    let x = (points[2] - points[0]);
    let y = (points[3] - points[1]);
    let res = y / x;
    if( x === 0) { return 'undefined' ;}
    return res + '';
    }