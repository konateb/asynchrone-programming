import axios from "axios";

async function getProduct() {
  try {
    // Get the product is request asynchronously
    const response = await axios.get(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    console.log("Received product data:");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

//Appelle aynchrone
getProduct();
