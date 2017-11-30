var x = 600851475143 //number to be checked for primes
var primes = [] //array of prime numbers
var primeNumber = false

for(i = 2; i <= x; i++) {
  if (x % i == 0) {
    for(var y = 2; y <= i/2; y++) {
      if(i % y != 0) {
        primeNumber = true;
      }
    }
    if (primeNumber == true){
      x /= i
      primes.push(i)
    }
  }
}
console.log(primes[primes.length - 1])
