function pow(x, y) {
    if (y === 0) {
        return 1;
    }
    let startPoint = 1; 

    if (y > 0) {
        for (let i = 0; i < y; i++) {
            startPoint = startPoint*x; 
        }
    }
    
    else {
        for (let i = 0; i < -y; i++) { 
            startPoint = startPoint*x; 
        }
        startPoint = 1 / startPoint; 
    }

    return startPoint; 
}
console.log(pow(2, 3)); 
console.log(pow(2, -3));
console.log(pow(2, 0));

