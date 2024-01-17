//operations CPU-bound
const add = (n1, n2) => console.log(n1 + n2);

//la fonction asynchrone

const addAsynchrone = (cb, a, b) => {
  console.log("start addAsynchrone");
  setTimeout(() => {
    cb(a, b);
    console.log("done");
  }, 3 * 1000);
};

addAsynchrone(add, 1, 3);
