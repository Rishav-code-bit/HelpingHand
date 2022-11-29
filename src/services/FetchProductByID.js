import axios from "axios";

class FetchProductByID {
  getProduct(id) {
    const USER_API_BASE_URL = `http://localhost:8080/api/products/${id}`;
    return axios.get(USER_API_BASE_URL);
  }
}

export default new FetchProductByID();
