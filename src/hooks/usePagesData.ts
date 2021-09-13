import axios from 'axios'
import React,{useState,useCallback,useEffect} from 'react'

export const usePagesData = (api:string) => {
	const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const getData = useCallback(() => {
        axios
        .get(api)
        .then((res) => {
            setData(res.data)
        })
        .catch(() => setError(true))
    }, [api])

    	useEffect(() => {
		getData()
	}, [getData])

	return {data,error }


}

