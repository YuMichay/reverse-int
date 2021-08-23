module.exports = function reverse (n) {
    if (n < 0){
        let nString = n.toString()
        .split("");
        let arr = nString.splice(1);
        return Number(arr.reverse().join(''));
    }
    let arr = n.toString()
    .split("");
    return Number(arr.reverse().join(''));
    }
