class Prime {
  constructor(isOnePrime = true) {
    this.count = isOnePrime ? 1 : 0;
  }

  countPrimes(upperbound, lowerbound = 2) {
    const primeFlag = Buffer.alloc((upperbound + 1) / 8 + 1, 255); // Each byte can represent 8 numbers

    const setComposite = (index) => {
      const byteIndex = Math.floor(index / 8);
      const bitIndex = index % 8;
      primeFlag[byteIndex] &= ~(1 << bitIndex);
    };

    const isPrime = (index) => {
      const byteIndex = Math.floor(index / 8);
      const bitIndex = index % 8;
      return (primeFlag[byteIndex] & (1 << bitIndex)) !== 0;
    };

    for (let i = 2; i * i < upperbound; i++) {
      if (isPrime(i)) {
        for (let j = i * i; j < upperbound; j += i) {
          setComposite(j);
        }
      }
    }

    for (let i = lowerbound; i < upperbound; i++) {
      if (isPrime(i)) {
        this.count++;
      }
    }
    return this.count;
  }
}
export default Prime;
