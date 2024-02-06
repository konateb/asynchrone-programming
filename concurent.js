import { exec, execSync } from "child_process";
function timeElapsed( start) {
  let delay = (Date.now() - start) / 1000;
  // console.log(method, "time elapsed", Math.floor(delay));
  return delay;
}

let totalTimeSleeped = 0; //Synch total time
const printTimeElapsed = () => {
  console.log("Synch TOTAL TIME: ", Math.floor(totalTimeSleeped));
};
function runSync(timeToSleep) {
  let start = Date.now();
  execSync(timeToSleep);
  const timeElapse = Math.floor(timeElapsed( start));
  totalTimeSleeped += timeElapse;
}

function execAsync(timeToSleep) {
  return new Promise((resolve) => {
    let start = Date.now();
    exec(timeToSleep, () => {
      resolve(timeElapsed( start));
    });
  });
}

runSync("sleep 3");
runSync("sleep 4");
runSync("sleep 5");
printTimeElapsed();
const runAsync1 = execAsync("sleep 3");
const runAsync2 = execAsync("sleep 5");
const runAsync3 = execAsync("sleep 4");
// Promise.all([runAsync1, runAsync2, runAsync3]).then((values) => {
//   console.log("Async total time elapsed:", Math.floor(Math.max(...values)));
// });


console.log("=============== DONE =================");
