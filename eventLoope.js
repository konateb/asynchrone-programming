const p = new Promise((resolve, reject) => {
  console.log('Starting 2');
  resolve("promise Line 16");
  console.log("Done line 4");
});
console.log("Line 6");
console.log("Line 7");
setTimeout(() => {
  console.log("Time Line 9");
}, 0);
setTimeout(() => {
  console.log("Time Line 12");
}, 0);

p.then((d) => {
  console.log(d);
});
console.log("Line 18");
