// Import the PrimeApp class using ES6 module syntax
// import Prime from "./utils/prime.js";
import Prime from "./utils/prime2.js";

const LOWER_BOUND = 2;
const UPPER_BOUND = 10;
// Create an instance of PrimeApp
const primeApp = new Prime(false);
const startTime = Date.now();
// Use the countPrimes method to find the number of primes less than 10
const numberOfPrimes = primeApp.countPrimes(UPPER_BOUND);

// Output the number of primes to the console
console.log(
  `Total primes between ${LOWER_BOUND} and ${UPPER_BOUND}: ${numberOfPrimes}`
);
// Output Elapsed time
 const elapsedMillis = Date.now() - startTime;
 console.log(`Elapsed: ${elapsedMillis/1000} second(s)`);
