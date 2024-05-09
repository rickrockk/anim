import { makeAutoObservable, observable, action } from "mobx";
import UserService from "./UserService";
import axios from "axios";
import userService from "./UserService";

interface User {
    email: string;
    token: string;
}

export class AuthService {
    token: string | null = null;
    public isAuth: boolean = false;

    constructor() {
        makeAutoObservable(this);
        this.token = localStorage.getItem('token'); // Используем storedToken для инициализации
        if (this.token) {
            this.isAuth = true;
            userService.fetchUser(this.token); // Загружаем данные пользователя при инициализации
        }
    }

    async login(email: string, password: string) {
        const response = await axios.post("http://127.0.0.1:8000/api/user/login/", {
            email,
            password,
        });
        console.log(response.data)
        this.isAuth = true;
        this.setToken(response.data.accessToken);
        await userService.fetchUser(response.data.accessToken); // Загружаем данные пользователя после логина
    }

    async logout() {
        this.isAuth = false;
        localStorage.removeItem("token");
        userService.clearUser();

    }

    setToken(token: string): void {
        this.token = token;
        localStorage.setItem("token", token);
    }

}

export const authService = new AuthService();