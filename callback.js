/**  l'operation est CPU-bound
//////////////////////////////
 for (const element of xArray) {
    total = total + element;
  }
//////////////////////
*/

// callback
function showResultDouble(e) {
 
   console.log(2 * e);
}
function showResultPlusOne(e) {
  console.log(1 + e);
}
 
//data
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("starting 22");
//fonction asynchrone
//printTotal(myArray, showTotal);
console.log("done 1");
 console.log("showResultDouble");
myArray.forEach(showResultDouble);
 console.log("showResultPlusOne");
myArray.forEach(showResultPlusOne);


console.log("done 2");
