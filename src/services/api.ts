import config from "@/config"
import axios from "axios"
const apiServerUrl = config.API_SERVER
const addTask = (value: string) => {
    return axios.post(`${apiServerUrl}/tasks`, {
            value
        })
}

const getTasks = () => {
    return axios.get(`${apiServerUrl}/tasks`)
}

const deleteTask = (id: string) => {
    return axios.delete(`${apiServerUrl}/tasks/${id}`)
}
export default {
    addTask,
    getTasks,
    deleteTask
}