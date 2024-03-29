import axios from "axios";
import uri from "./urls";

const USER_API_BASE_URL = uri + "/api/wishlist";

class AddWishlistService {
  saveProduct(product) {
    return axios.post(USER_API_BASE_URL, product);
  }

  getProduct(email) {
    return axios.get(uri + `/api/wishlist/${email}`);
  }

  deleteProduct(wid) {
    return axios.delete(uri + `/api/wishlist/${wid}`);
  }
}

export default new AddWishlistService();
