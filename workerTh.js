import { Worker, isMainThread, parentPort } from "worker_threads";

if (isMainThread) {
  // Main thread code
  // Create an array to store worker threads
  const workerThreads = [];
  // Create a number of worker threads and add them to the array
  for (let i = 0; i < 4; i++) {
    workerThreads.push(new Worker(__filename));
  }
  // Send a message to each worker thread with a task to perform
  workerThreads.forEach((worker, index) => {
    worker.postMessage({ task: index });
  });
} else {
  // Worker thread code
  // Listen for messages from the main thread
  parentPort.on("message", (message) => {
    console.log(`Worker ${process.pid}: Received task ${message.task}`);
    // Perform the task
    performTask(message.task);
  });
  function performTask(task) {
    // … operations to be performed to execute the task
  }
}
