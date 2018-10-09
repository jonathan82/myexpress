function randInt(s,e) {
    // Generate a random integer between s and e exclusive
    return Math.floor(Math.random() * (e-s)) + s;
}

function genId() {
    // Randomly generates an 8-character string 
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let s = '';
    for (let _ = 0; _ < 8; _++) {
        let i = Math.floor(Math.random() * alpha.length);
        s += alpha[i];        
    }
    return s;
}

module.exports.genId = genId;
module.exports.randInt = randInt;