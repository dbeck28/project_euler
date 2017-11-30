var x = 100
var y = 100
var product = x * y
var lastPal = 0
var pals = []


for (x; x <= 999; x++) {
    for (y = x; y <= 999; y++) {
        product = x * y;
        var compare = parseInt(product.toString().split('').reverse().join(''));
        if (compare == product && lastPal < product){
            lastPal = product
            pals.push(lastPal)
        }
    }
}
console.log(pals[pals.length - 1]) //returns largest 3 digit palindrome

