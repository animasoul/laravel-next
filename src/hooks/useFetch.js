import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

// Import your mock data
import mockData from '/mock.json'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `${process.env.API_URL}${endpoint}`,
        headers: {
            'X-RapidAPI-Key': `${process.env.API_KEY}`,
            'X-RapidAPI-Host': `${process.env.API_HOST}`,
        },
        params: { ...query },
    }

    const fetchData = async () => {
        setIsLoading(true)
        setError(null) // Reset previous errors

        if (process.env.NODE_ENV === 'development') {
            // Simulate loading time with a timeout
            setTimeout(() => {
                setData(mockData)
                setIsLoading(false)
            }, 500)
        } else {
            try {
                const response = await axios.request(options)
                setData(response.data.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [endpoint, JSON.stringify(query)]) // Rerun effect if endpoint or query change

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default useFetch
