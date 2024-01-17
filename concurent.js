//https://masteringjs.io/tutorials/node/sleep
import { exec, execSync } from "child_process";
async function runAsyncPromise() {
  const start = Date.now();
  await Promise.all([delay(1000), delay(2000)]);
  // Prints about 1000, because the `delay()` calls run in parallel
  console.log("Elapsed:", (Date.now() - start) / 1000, " second(s)");
}

function delay(timeDelay) {
  return new Promise((resolve) => setTimeout(resolve, timeDelay));
}

function runSync() {
  const start = Date.now();
  execSync("sleep 1");
  execSync("sleep 2");
  console.log("Elapsed:", (Date.now() - start) / 1000, " second(s)");
}
function runAsync() {
  const start = Date.now();
  exec("sleep 1");
  exec("sleep 2");
  console.log("Elapsed:", (Date.now() - start) / 1000, " second(s)");
}
/////////////////////////////// Testing paralelism
runAsyncPromise();
runSync();
/** 
 * runAsync();
*/

console.log("=============== DONE =================");
