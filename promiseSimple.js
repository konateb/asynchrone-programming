const print = (name) => {
  return "Hello " + name + "!";
};
function xPromisse(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(print(name));
    });
  });
}
/////////////////////
xPromisse("Bakary").then((result) => {
  console.log("succ:", result);  
});

async function printResult(name) {
  const result = await xPromisse(name);
  console.log(result); // --> 'done!';
}

printResult("Bakary");
