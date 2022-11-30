import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.0.2.2:1433/api"
})

export const getInstitutions = async() => {
    const response = await api.get('/searchInstitution')
    return response.data
}