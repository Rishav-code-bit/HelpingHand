import axios from "axios";


class LoginService {
    getUser(email) {
        const USER_API_BASE_URL = `http://localhost:8080/users/${email}`;
        return axios.get(USER_API_BASE_URL);
    }
}

export default new LoginService();