import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/wishlist";

class AddWishlistService {
  saveProduct(product) {
    return axios.post(USER_API_BASE_URL, product);
  }

  getProduct(email) {
    return axios.get(`http://localhost:8080/api/wishlist/${email}`);
  }

  deleteProduct(wid) {
    return axios.delete(`http://localhost:8080/api/wishlist/${wid}`);
  }
}

export default new AddWishlistService();
