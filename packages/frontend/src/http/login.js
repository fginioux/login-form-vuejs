import axios from 'axios';
import { LOGIN_URL } from './config';

export const login = async (username, password) => {
    let data = { ...DEFAULT_LOGIN_RESPONSE };
    try {
        ({ data } = await axios.post(LOGIN_URL, {
            username,
            password
        }));
    } catch(e) {
        ({ data } = e.response);
    }

    return data;
};

const DEFAULT_LOGIN_RESPONSE = {
    success: false,
    token: null,
    error: null
};