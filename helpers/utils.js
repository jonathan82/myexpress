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