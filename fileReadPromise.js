import childProcess from "child_process";
import fspromis from "node:fs/promises";
function getFileSync(fileName) {
  childProcess.exec("sleep 6");
}
function delay(d) {
  childProcess.exec(d);
  return d;
}
////////////////////////////////////////////////////////////////
// How to read a file asynchronously with a synchrone method? ///////
//
// 1) Create a function that return Promise object
//    which function resolve takes the synchrone method as its argument.
//    Here we use in our example readFileSync(...) that reads file synchronously
//
function readFilePromise(d) {
  return new Promise((resolve, reject) => {
    try {
      delay(d);
      resolve("delay(d)");
    } catch (error) {
      reject(error);
    }
  });
}

// 2)  call the function that return Promise object inside a new
// wrapper function with async/await syntax as in the example below.
async function getFileAsync(fileName) {
  try {
    const data = await fspromis.readFile("test.txt", "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
}
// call the function asynchronously
 
let data1 = await getFileAsync("test2.txt");
console.log(data1);
// // console.log("BBBBBB");
let data2 = await readFilePromise("sleep 5");
console.log("CCCCCCCC");
console.log(data2);
console.log("DONE");
