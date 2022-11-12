import axios from "axios";


export const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
    if (token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.authorization = "";
}

export const AuthSignup = async(data)=>{
    const response = await instance.post('/users/signup', data)
    setToken(response.data.token)
    return response.data;
}

export const AuthLogin = async(data)=>{
    const response = await instance.post('/users/login', data)
    setToken(response.data.token)
    return response.data
}

export const AuthLogout = async()=>{
    const response = await instance.post('/users/logout')
    return response.data
}