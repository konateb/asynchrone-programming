const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

//expected response not resolved yet(pending)
console.log("Promise",fetchPromise);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("DATA received: ");
    console.log(data);
  })
  .catch((error) => console.error("Failed to retrieve data", error.message));
