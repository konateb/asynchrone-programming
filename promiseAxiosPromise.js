import axios from "axios";
const fetchPromise = axios(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

//expected response not resolved yet(pending)
console.log("Promise", fetchPromise);

fetchPromise
  .then((data) => {
    console.log("DATA received: ");
    console.log(data);
  })
  .catch((error) => console.error("Failed to retrieve data", error.message));
