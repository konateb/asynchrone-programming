import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
 import { parse } from "some-js-parsing-library";

if (isMainThread) {
  module.exports = function parseJSAsync(script) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: script,
      });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
 
  const script = workerData;
  parentPort.postMessage(parse(script));
}
