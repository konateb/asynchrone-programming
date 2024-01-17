/////////////
const divTwoByNum = (e) => {
  if (e === 0) throw new Error("division par 0");
  return 10 / e;
};
//////////////////
function getResult(num) {
  return new Promise((resolve, reject) => {
    try {
      resolve(divTwoByNum(num));
    } catch (error) {
      reject(error);
    }
  });
}

/////////////////
const asynFunction = async (num) => {
  try {
    const result = await getResult(num);
    console.log("10 / num = ", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
//////////
asynFunction(2);
asynFunction(0);
asynFunction(5);
