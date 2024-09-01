import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
   const response = await fetch(allProductsUrl);
   const json = response.json();
   return json;
};

export default fetchProducts;
