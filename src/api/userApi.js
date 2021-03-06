const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function userApi(voter_id) {
    return axiosInstance.get('/userUpdate', {
        id: voter_id,
    }).then((response) => {
        // const res = JSON.parse(response.request.response)
        return response.data
    })
}
