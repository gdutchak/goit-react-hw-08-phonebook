import { instance } from './apiAuth';

export const getContacts = async()=>{
    const response = await instance.get('/contacts')
    return response.data
}

export const addContacts = async(data)=>{
    const response = await instance.post('/contacts', data)
    return response.data
}

export const deleteContacts = async(id)=>{
    const response = await instance.delete(`/contacts/${id}`)
    return response.data
}