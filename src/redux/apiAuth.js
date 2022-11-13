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

export const authSignup = async(data)=>{
    const response = await instance.post('/users/signup', data)
    setToken(response.data.token)
    return response.data;
}

export const authLogin = async(data)=>{
    const response = await instance.post('/users/login', data)
    setToken(response.data.token)
    return response.data
}

export const authLogout = async()=>{
    const response = await instance.post('/users/logout')
    return response.data
}

export const authCurrentUser = async(token)=>{
try {
    setToken(token)
    const response = await instance.get('/users/current')
    return response
} catch (error) {
    setToken()
    throw error
}
}
