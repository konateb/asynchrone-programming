
import fs from "node:fs/promises";

async function getFileAsync() {
  try {
    const data = await fs.readFile("test.txt", { encoding: "utf8" });
    console.log("==== readFile =====");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
//asynchronous call to getFile

const p = new Promise(function (resolve, reject) {
  resolve("==== Promise =====");
});

const timeout = () => {
  setTimeout(() => {
    console.log("==== Timeout =====");
  }, 0);
};

//asynchronous calls
//3
getFileAsync();
//1
p.then(function (response) {
  console.log(response);
});
//2
timeout();

