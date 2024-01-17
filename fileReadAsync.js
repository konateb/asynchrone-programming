import fs1 from "node:fs/promises";
import fs from "node:fs";
///////////////Direct use of API functions.
fs.readFile("test.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
});
/////use of API functions via a function wrapper
//using callback function
function getFileAsyncCallBack(fileName) {
  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) throw error;
    console.log(data);
  });
}

//call the function wrapper
getFileAsyncCallBack("test.txt");

// Direct use of API functions using the package "node:promises"
const data = await fs1.readFile("test2.txt", "utf8");
console.log(data);

// use of API functions via a function wrapper
//using async/await
async function getFileAsyncAwait(fileName) {
  try {
    const data = await fs1.readFile(fileName, { encoding: "utf8" });
    console.log(data);
  } catch (error) {
    console.log("Error: fail to read");
  }
}
 
  getFileAsyncAwait("test2.txt");
