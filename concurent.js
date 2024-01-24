import { exec, execSync } from "child_process";

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
// runAsync();
runSync();

console.log("=============== DONE =================");
