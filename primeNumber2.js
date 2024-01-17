// import PrimeApp from "./utils/prime.js";
// import PrimeApp2 from "./utils/prime2.js";
// import PrimeApp from "./primeNumber.js";

const LOWER_BOUND = 2;
const UPPER_BOUND = 1_000_000;
// const primeAppInstance = new PrimeApp(false);
// const primeAppInstance = new PrimeApp2(false);
// const primeAppInstance = new PrimeApp(false);
// const start = Date.now();

import { Worker } from "worker_threads";
import os from "os";

const numWorkers = os.cpus().length;
console.log("CPU Core", numWorkers);
const upperbound = 10_000_000; // Adjust the range as needed
const lowerbound = 2;

const segmentSize = Math.floor((upperbound - lowerbound) / numWorkers);
let activeWorkers = numWorkers;
let totalPrimes = 0;

for (let i = 0; i < numWorkers; i++) {
  const start = lowerbound + i * segmentSize;
  const end = i === numWorkers - 1 ? upperbound : start + segmentSize;
  const startTime = Date.now();
  const worker = new Worker(new URL("./worker.js", import.meta.url), {
    workerData: { start, end, lowerbound },
  });

  worker.on("message", (count) => {
    totalPrimes += count;
    if (--activeWorkers === 0) {
      console.log(
        `Total primes between ${lowerbound} and ${upperbound}: ${totalPrimes}`
      );
      const elapseTime = (Date.now() - startTime) / 1000;
      console.log(`Elapsed: ${elapseTime} second(s)`);
      
    }
  });

  worker.on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
      process.exit(code);
    }
  });
}
