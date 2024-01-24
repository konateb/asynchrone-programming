//https://masteringjs.io/tutorials/node/sleep
import { exec, execSync } from "child_process";
async function runAsyncPromise() {
  const start = Date.now();
  await Promise.all([delay("sleep 1"), delay("sleep 2")]);
  // Prints about 1000, because the `delay()` calls run in parallel
  timeElapsed("AsyncPromise:", start);
}

function delay(timeSleep) {
  return new Promise((resolve) => resolve(exec(timeSleep)));
}

function runSync() {
  const start = Date.now();
  execSync("sleep 1");
  execSync("sleep 2");
  timeElapsed("Sync:", start);
}

function runAsync() {
  const start = Date.now();
  exec("sleep 1");
  exec("sleep 2");
  timeElapsed("Async:", start);
}
/////////////////////////////// Testing paralelism
function timeElapsed(fnName, start) {
  console.log(fnName, (Date.now() - start) / 1000, " second(s)");
}
runAsyncPromise();
runAsync();
// runSync();

console.log("=============== DONE =================");
