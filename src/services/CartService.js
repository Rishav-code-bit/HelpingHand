import axios from "axios";
import uri from "./urls";

const USER_API_BASE_URL = uri + "/api/cart";

class CartService {
  saveProduct(product) {
    return axios.post(USER_API_BASE_URL, product);
  }

  getProduct(email) {
    return axios.get(USER_API_BASE_URL + "/" + email);
  }

  getSum(email) {
    return axios.get(uri + "/api/cartSum/" + email);
  }

  deleteProduct(cid) {
    return axios.delete(USER_API_BASE_URL + "/" + cid);
  }
}

export default new CartService();
