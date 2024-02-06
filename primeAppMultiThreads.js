//primeAppMultiThread.js
import { isMainThread, Worker } from "worker_threads";
import os from "os";
const numWorkers = 1//os.cpus().length;

console.log("CPU Core", numWorkers);
const LOWER_BOUND = 2; // Adjust the range as needed
const UPPER_BOUND = 100_000_000;

const segmentSize = Math.floor((UPPER_BOUND - LOWER_BOUND) / numWorkers);
let activeWorkers = numWorkers;
let totalPrimes = 0;
let allLastPrimes = [];

if (isMainThread) {
  const startTime = Date.now();
  for (let i = 0; i < numWorkers; i++) {
    const start = LOWER_BOUND + i * segmentSize;
    const end = i === numWorkers - 1 ? UPPER_BOUND : start + segmentSize;

    const worker = new Worker(new URL("./worker.js", import.meta.url), {
      workerData: { start, end, LOWER_BOUND },
    });
    worker.on("message", ({ count, lastPrimes }) => {
      totalPrimes += count;
      allLastPrimes.push(...lastPrimes);
      if (--activeWorkers === 0) {
        // get the time elapsed 
        const timeElapsed = (Date.now() - startTime) / 1000;
        // Specifying US locale:en-US(commas separated)
        
        const upperBound = UPPER_BOUND.toLocaleString("en-US");
        const lowerbound = LOWER_BOUND.toLocaleString("en-US");
        const totalPrimesNumberUS = totalPrimes.toLocaleString("en-US");
        console.log(
          `Total primes between ${lowerbound} and ${upperBound} are ${totalPrimesNumberUS}`
        );
        const uniqueLastPrimes = [...new Set(allLastPrimes)]
          .sort((a, b) => a - b)
          .slice(-10);
        console.log(`Unique last 10 primes: ${uniqueLastPrimes.join(", ")}`);
        

        // Specifying formatting options
        const options = {
          style: "decimal", // default
          minimumFractionDigits: 2,
          maximumFractionDigits: 3,
        };
        console.log(
          `Elapsed: ${timeElapsed.toLocaleString("en-US", options)} second(s)`
        );
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
}
