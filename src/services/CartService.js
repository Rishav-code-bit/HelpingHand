import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/cart";

class CartService {
  saveProduct(product) {
    return axios.post(USER_API_BASE_URL, product);
  }

  getProduct(email) {
    return axios.get(USER_API_BASE_URL + "/" + email);
  }

  getSum(email) {
    return axios.get("http://localhost:8080/api/cartSum/" + email);
  }

  deleteProduct(cid) {
    return axios.delete(USER_API_BASE_URL + "/" + cid);
  }
}

export default new CartService();
