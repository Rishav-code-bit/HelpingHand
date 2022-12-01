import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/order";

class OrderService {
  saveOrder(email) {
    return axios.post(USER_API_BASE_URL + "/" + email);
  }

  getOrder(email) {
    return axios.get(USER_API_BASE_URL + "/" + email);
  }
}

export default new OrderService();
