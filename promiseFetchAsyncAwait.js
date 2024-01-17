/////////////// fetchDataASyncAwait /////////////
const fetchDataASyncAwait =  async () => {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    
    const data = await response.json();
    console.log("DATA: ");
    console.log(data);
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
};


  fetchDataASyncAwait();
  





console.log("Requesting…");
