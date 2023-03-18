import axios from '../bootstrap/axios';
import { defineStore } from 'pinia';

import UserSession from '../types/UserSession';
import LoginRequest from '../types/LoginRequest';
import User from '../types/User';
import { AxiosResponse } from 'axios';

const useAuth = defineStore({
    id: 'auth',
    state: (): UserSession => {
        let user: User | null = null
        let token: string | null = null;

        if (localStorage.getItem('user') != undefined && localStorage.getItem('user') != null) {
            user = JSON.parse(localStorage.getItem('user') as string);
        }

        if (localStorage.getItem('user') != undefined && localStorage.getItem('user') != null) {
            token = JSON.parse(localStorage.getItem('token') as string);
        }

        return {
            user: user,
            token: token
        }
    },
    getters: {
        isLoggedIn: (state) => {
            if (state.user != null && state.token != null) {
                return true;
            }

            return false;
        },
        getUserName: (state) => {
            return state.user?.name;
        }
    },
    actions: {
        // Return true if success
        // Return false if failed
        async auth(form: { email: string, password: string }) {
            await axios.get('/sanctum/csrf-cookie');
            let result: AxiosResponse<LoginRequest> = await axios.post('/login', form);
            if (result.status != 200) {
                return false;
            }

            const loginData = result.data;
            localStorage.setItem('user', JSON.stringify(loginData.user));
            localStorage.setItem('token', JSON.stringify(loginData.token));

            this.user = loginData.user;
            this.token = loginData.token;
            return true;
        },
        logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.user = null;
            this.token = null;
        },
    }
})

export default useAuth;
