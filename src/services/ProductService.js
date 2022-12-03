import axios from "axios";
import uri from "./urls";

class ProductService {
  getProduct(id) {
    const USER_API_BASE_URL = uri + `/api/products/${id}`;
    return axios.get(USER_API_BASE_URL);
  }

  getProducts() {
    const USER_API_BASE_URL = uri + `/api/products`;
    return axios.get(USER_API_BASE_URL);
  }
}

export default new ProductService();
