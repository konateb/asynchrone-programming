import fs from "node:fs";

function getFileSync(fileName) {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

function getFileAsync(fileName) {
  return new Promise((resolve, reject) => {
    try {
      resolve(fs.readFileSync(fileName, "utf8"));
    } catch (error) {
      reject(error);
    }
  });
}
// call synchroneously
 const data = fs.readFileSync("test.txt", "utf8");
 console.log("data:")
 console.log(data);


// call synchroneously
const texte1 = getFileSync("test.txt");
console.log(texte1);
// call asynchroneously
const texte2 = await getFileAsync("test2.txt");
console.log(texte2);
