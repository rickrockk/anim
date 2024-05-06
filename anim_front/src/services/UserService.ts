import { makeObservable, observable, action } from "mobx";
import axios, { AxiosResponse } from "axios";

interface User {
    id: number;
    first_name: string;
    email: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
}

class UserService {
    user: User | null = null;

    constructor() {
        makeObservable(this, {
            user: observable,
            setUser: action,
        });
    }

    async fetchUser(token: string): Promise<void> {
        try {
            const response: AxiosResponse<User> = await axios.get('http://127.0.0.1:8000/api/user/me/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    setUser(user: User): void {
        this.user = user;
    }

    clearUser() {
        this.user = null;
    }
}

const userService = new UserService();
export default userService;