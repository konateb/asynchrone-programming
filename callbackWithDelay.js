/**   operation CPU bound. 
 * Simulation d'une 
 * operation de longue duree
 * 
 setTimeout(() => {
    cb(a, b);
  }, delay * 1000);
 */
const print=(a)=>{
  console.log(a);
};
// Le call back: function to display the operation result with delay
 const add = (n1, n2) => print(n1 + n2);
 const mul = (n1, n2) => print(n1 * n2);

//function wrap Node.js Timer
async function operationWithDelay(cb, a, b, delay) {
  setTimeout(() => {
    cb(a, b);
  }, delay * 1000);
}

const TIMER_CONSTANTE = 2;

operationWithDelay(mul, 23, 1, TIMER_CONSTANTE);
console.log(" line 24")

