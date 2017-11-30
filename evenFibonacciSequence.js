var x = 0 //variable that will add up to sum
var y = 0 //variable to be added

for (i = 1; i < 4000000; i++) {
  if (i % 2 === 0) {
    y = i
    x += i
  }
}
console.log(x)