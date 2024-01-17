//data
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//callbacks
const double = (a) => a * 2;
const sub = (a, b) => a - 2;

// la function asynchronously uses the
function opArray(myArray, callback) {
  return myArray.map(callback);
}

const newArray1 = opArray(myArray,double);
const newArray2 = opArray(myArray, sub);

console.log("myArray", myArray);
console.log("newArray1", newArray1);
console.log("newArray1", newArray2);