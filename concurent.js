import { exec, execSync } from "child_process";
function timeElapsed(start) {
  let delay = (Date.now() - start) / 1000;
  return delay;
}
const printTimeElapsed = () => {
  console.log("Synch TOTAL TIME: ", Math.floor(totalTimeSleeped));
};
let totalTimeSleeped = 0;
function runSync(timeToSleep) {
  let start1 = Date.now();
  execSync(timeToSleep);
  const timeElapse = Math.floor(timeElapsed(start1));
  totalTimeSleeped += timeElapse;
  console.log("Sync time elapsed:", timeElapse);
}

function execAsync(timeToSleep) {
  return new Promise((resolve) => {
    let start = Date.now();
    exec(timeToSleep, () => {
      resolve(timeElapsed(start));
    });
  });
}

const runPromise1 = execAsync("sleep 2");
const runPromise2 = execAsync("sleep 5");
const runPromise3 = execAsync("sleep 5");

// Promise.all([runPromise1, runPromise2]).then((values) => {
//   console.log(" total", Math.max(...values));
// })

runSync("sleep 3");
runSync("sleep 5");
runSync("sleep 5");

printTimeElapsed();
console.log("=============== DONE =================");
