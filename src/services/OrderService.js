import axios from "axios";
import uri from "./urls";

const USER_API_BASE_URL = uri + "/api/order";

class OrderService {
  saveOrder(email) {
    return axios.post(USER_API_BASE_URL + "/" + email);
  }

  getOrder(email) {
    return axios.get(USER_API_BASE_URL + "/" + email);
  }
}

export default new OrderService();
