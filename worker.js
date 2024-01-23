// worker.js
import { parentPort, workerData } from "worker_threads";
import PrimeCounter from "./primeCounter.js";

const primeCounter = new PrimeCounter();

const { start, end, LOWER_BOUND } = workerData;
const count = primeCounter.countSegmentPrimes(start, end, LOWER_BOUND);
parentPort.postMessage({ count, lastPrimes: primeCounter.lastPrimes });
