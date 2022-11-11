import axios from "axios";
const url= axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = (token) => {
    if (token) {
        return url.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    url.defaults.headers.common.authorization = "";
}

export const AuthSignup = async(data)=>{
    const response = await axios.post('/users/signup', data)
    setToken(response.data.token)
    return response
}

export const AuthLogin = async(data)=>{
    const response = await axios.post('/users/login', data)
    setToken(response.data.token)
    return response
}

export const AuthLogout = async()=>{
    const response = await axios.post('/users/logout')
    return response
}