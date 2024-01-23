// Import the Prime class using ES6 module syntax
import Prime from "./utils/prime.js";

const LOWER_BOUND = 2;
const UPPER_BOUND = 10_000_000;
// Create an instance of PrimeApp
const primeApp = new Prime(false);
const startTime = Date.now();
// Use the countPrimes method to find the number of primes less than 10
const numberOfPrimes = primeApp.countPrimes(UPPER_BOUND);
// Specifying US locale:en-US(commas separated)
        const totalPrimesNumberUS = numberOfPrimes.toLocaleString("en-US");
        const upperBound = UPPER_BOUND.toLocaleString("en-US");
        const lowerbound = LOWER_BOUND.toLocaleString("en-US");
// Output the number of primes to the console
console.log(
  `Total primes between ${lowerbound} and ${upperBound}: ${totalPrimesNumberUS}`
);
// Output Elapsed time
const elapsedMillis = Date.now() - startTime;
console.log(`Elapsed: ${elapsedMillis / 1000} second(s)`);
