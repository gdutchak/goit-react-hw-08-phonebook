import axios from 'axios';

const baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async()=>{
    const response = await axios.get(`${baseURL}/contacts`)
    return response.data
}

export const addContacts = async(data)=>{
    const response = await axios.post('/contacts', data)
    return response.data
}

export const deleteContacts = async(id)=>{
    const response = await axios.delete(`/contacts/${id}`)
    return response.data
}