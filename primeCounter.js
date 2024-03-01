// primeCounter.js
//Implementation of the Sieve of Eratosthenes algorithm.
class PrimeCounter {
  constructor() {
    this.lastPrimes = []; // Array to store the last 10 primes
  }

  getBasePrimes(limit) {
    // JavaScript engines have a maximum array length they can handle.
    // The exact limit can vary, but it is typically around 2^32 - 1.
    if (limit > Number.MAX_SAFE_INTEGER) {
      throw new RangeError(`The limit is too large to handle: ${limit}`);
    }
    // Use 1 for true, 0 for false
    const primeFlags = new Uint8Array(limit + 1);
    primeFlags.fill(1);
    primeFlags[0] = primeFlags[1] = 0;

    for (let i = 2; i * i <= limit; i++) {
      if (primeFlags[i]) {
        for (let j = i * i; j <= limit; j += i) {
          primeFlags[j] = 0;
        }
      }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (primeFlags[i]) {
        primes.push(i);
      }
    }

    return primes;
  }

  countSegmentPrimes(start, end, lowerbound) {
    if (end > Number.MAX_SAFE_INTEGER) {
      throw new RangeError(`The limit is too large to handle: ${end}`);
    }
    // const primeFlags = new Array(end - start).fill(true);
    // Use 1 for true, 0 for false
    const primeFlags = new Uint8Array(end - start).fill(1);
    const basePrimes = this.getBasePrimes(Math.sqrt(end));

    basePrimes.forEach((prime) => {
      const firstMultiple = prime * Math.max(prime, Math.ceil(start / prime));
      for (let j = firstMultiple; j < end; j += prime) {
        if (j >= start) primeFlags[j - start] = false;
      }
    });

    let count = 0;
    for (
      let i = Math.max(start, lowerbound) - start;
      i < primeFlags.length;
      i++
    ) {
      if (primeFlags[i]) {
        count++;
      }
    }
    // Add new primes to the lastPrimes array
    for (
      let i = Math.max(start, lowerbound) - start;
      i < primeFlags.length;
      i++
    ) {
      if (primeFlags[i]) {
        this.lastPrimes.push(i + start);
        if (this.lastPrimes.length > 10) {
          this.lastPrimes = this.lastPrimes.slice(-10); // Keep only the last 10 primes
        }
      }
    }
    return count;
  }

  printLast10Primes() {
    if (this.lastPrimes.length > 0) {
      console.log(`Last 10 primes: ${this.lastPrimes.join(", ")}`);
    } else {
      console.log("No primes found.");
    }
  }
  getLast10Primes() {
    return this.lastPrimes;
  }
}
export default PrimeCounter;
