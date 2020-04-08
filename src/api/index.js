import axios from 'axios'
import { useState, useEffect } from 'react'

export const BASIC_URL = 'https://covid19.mathdro.id/api'

// abstract the fetch operation to a custom hook

export const useFetchData = (url, country) => {
  const [data, setData] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      setIsError(false)

      let changeableUrl = url

      if (country) {
        changeableUrl = `${url}/countries/${country}`
      }

      try {
        const response = await axios(changeableUrl)
        if (!didCancel) {
          setData(response.data)
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true)
        }
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [url, country])

  return [data, isError]
}
