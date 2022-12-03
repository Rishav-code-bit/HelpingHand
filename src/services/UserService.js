import axios from "axios";
import uri from "./urls";

const USER_API_BASE_URL = uri + "/api/users";

class UserService {
  saveUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  getUser(email) {
    const USER_API_BASE_URL = uri + `/api/users/${email}`;
    return axios.get(USER_API_BASE_URL);
  }

  updatePassword(email, password) {
    const USER_API_BASE_URL = uri + `/api/users/${email}/${password}`;
    return axios.post(USER_API_BASE_URL);
  }
}

export default new UserService();
