import React from 'react'
import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setdata] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
            fetch(url)
                .then(res => res.json())
                .then(datas => {
                    setdata(datas)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => console.log(err.message))
        

    }, [])

    return { data, isPending, error }

}
