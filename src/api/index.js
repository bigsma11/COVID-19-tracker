import axios from 'axios'
import { useState, useEffect } from 'react'

// abstract the fetch operation to a custom hook

export const useFetchData = (url) => {
  const [data, setData] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)

      try {
        const response = await axios(url)
        setData(response.data)
      } catch (error) {
        setIsError(true)
      }
    }

    fetchData()
  }, [url])

  return [data, isError]
}
