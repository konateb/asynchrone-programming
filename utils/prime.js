class Prime {
  constructor(isOnePrime = true) {
    this.count = isOnePrime ? 1 : 0;
  }

  countPrimes(upperbound, lowerbound = 2) {
    const primeFlag = new Array(upperbound + 1).fill(true);

    for (let i = lowerbound; i < upperbound; i++) {
      primeFlag[i] = true;
    }

    for (let i = lowerbound; i * i < upperbound; i++) {
      if (primeFlag[i]) {
        for (let j = i * i; j < upperbound; j += i) {
          primeFlag[j] = false;
        }
      }
    }

    for (let i = lowerbound; i < upperbound; i++) {
      if (primeFlag[i]) {
        this.count++;
      }
    }

    return this.count;
  }
}

export default Prime;
