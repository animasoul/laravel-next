import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
            'GET,PUT,POST,DELETE,PATCH,OPTIONS,HEAD',
        'Access-Control-Allow-Headers': '* ',
    },
    withCredentials: true,
})

export default axios
