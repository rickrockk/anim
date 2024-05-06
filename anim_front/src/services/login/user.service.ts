import axios from 'axios';
import Global from "../../helpers/global";
import { authHeader } from "../../helpers/auth-header";

const userService = {
    login,
};

async function login(email, password) {
    try {
        const response = await axios.post(Global.BASE_API_PATH + "/login/", {
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        if (error.response.status === 401) {
            console.log('Неверный логин/пароль')
        }
        return Promise.reject(error);
    }
}

export default userService;