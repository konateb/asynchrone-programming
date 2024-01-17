export function getBasePrimes(limit) {
  const sieveSize = Math.floor((limit + 1) / 8) + 1; // Calculate the required bytes
  const primeFlags = new Uint8Array(sieveSize).fill(255); // Set all bits to 1

  // Set bit to 0 function
  const setNotPrime = (index) => {
    const byteIndex = Math.floor(index / 8);
    const bitIndex = index % 8;
    primeFlags[byteIndex] &= ~(1 << bitIndex);
  };

  // Check if bit is set to 1 (prime)
  const isPrime = (index) => {
    const byteIndex = Math.floor(index / 8);
    const bitIndex = index % 8;
    return (primeFlags[byteIndex] & (1 << bitIndex)) !== 0;
  };

  setNotPrime(0); // 0 is not a prime
  setNotPrime(1); // 1 is not a prime

  for (let i = 2; i * i <= limit; i++) {
    if (isPrime(i)) {
      for (let j = i * i; j <= limit; j += i) {
        setNotPrime(j);
      }
    }
  }

  // Extract primes from bitset
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {primes.push(i); console.log( i);};
  }

  return primes;
}

export function countSegmentPrimes(start, end, lowerbound, getBasePrimes) {
  const segmentSize = end - start;
  const sieveSize = Math.floor(segmentSize / 8) + 1;
  const primeFlags = new Uint8Array(sieveSize).fill(255); // Set all bits to 1

  // Set bit to 0 function
  const setNotPrime = (index) => {
    const byteIndex = Math.floor(index / 8);
    const bitIndex = index % 8;
    primeFlags[byteIndex] &= ~(1 << bitIndex);
  };

  // Check if bit is set to 1 (prime)
  const isPrimeInSegment = (index) => {
    if (index < start || index >= end) return false;
    const adjustedIndex = index - start;
    const byteIndex = Math.floor(adjustedIndex / 8);
    const bitIndex = adjustedIndex % 8;
    return (primeFlags[byteIndex] & (1 << bitIndex)) !== 0;
  };

  const basePrimes = getBasePrimes(Math.sqrt(end));
  basePrimes.forEach((prime) => {
    let firstMultiple = prime * Math.max(prime, Math.ceil(start / prime));
    if (firstMultiple < lowerbound * lowerbound) {
      firstMultiple = lowerbound * lowerbound;
    }
    for (let j = firstMultiple; j < end; j += prime) {
      if (j >= start) setNotPrime(j - start);
    }
  });

  let count = 0;
  for (let i = start; i < end; i++) {
    if (isPrimeInSegment(i)) count++;
  }

  // Include the lowerbound if it's 2 and within the range
  if (start <= 2 && end > 2) count++;

  return count;
}