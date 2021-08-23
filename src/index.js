module.exports = function reverse (n) {
    let arr = n.toString()
    .split("");
    return Number(arr.reverse().join(''));
    }
