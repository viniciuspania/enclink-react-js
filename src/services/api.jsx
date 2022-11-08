import axios from 'axios'

export const key = "3dc389344f17fd6f4fd33d9ac107d7649a5d8f3b"

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        'Authorization': `Bearer ${key}`
    }
})


export default api; 