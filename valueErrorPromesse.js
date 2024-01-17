const divTwoBy = (e) => {
  if (e === 0) throw new Error("Error: division par zero");
  return 10 / e;
};
function getResult(num) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(divTwoBy(num));
    } catch (error) {
      reject(error);
    }
  });
}

getResult(2)
  .then((response) => console.log(response))
  .catch((err) => console.error(err.message));

  getResult(0)
  .then((response) => console.log(response))
  .catch((err) => console.error(err.message));

  getResult(3)
    .then((response) => console.log(response))
    .catch((err) => console.error(err.message));
