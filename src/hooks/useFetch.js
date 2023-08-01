import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const useFetch = (endpoint, query, page) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [totalPages, setTotalPages] = useState(1)

    const [parameters, setParameters] = useState(null)

    const options = {
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        headers: {
            'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_API_HOST}`,
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_API_URL}`,
        },
        withCredentials: false,
        params: { ...query, page },
    }

    const fetchData = async () => {
        setIsLoading(true)
        setError(null) // Reset previous errors

        if (process.env.NEXT_PUBLIC_NODE_ENV === 'mock') {
            // Dynamically import mock data
            import('/mock.json').then(mockData => {
                setTimeout(() => {
                    setData(mockData.default)
                    setParameters(mockData.default.parameters)
                    setTotalPages(mockData.default.parameters.num_pages)
                    setIsLoading(false)
                }, 500)
            })
        } else {
            try {
                const response = await axios.request(options)
                setData(response.data)
                setTotalPages(response.data.parameters.num_pages)
                setParameters(response.data.parameters)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [endpoint, JSON.stringify(query), page]) // Rerun effect if endpoint or query change

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch, totalPages, parameters }
}

export default useFetch
