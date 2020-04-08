import axios from 'axios'
import { useState, useEffect } from 'react'

const url = 'https://covid19.mathdro.id/api'

export const useFetchData = () => {
  const [data, setData] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)

      try {
        const {
          data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios(url)

        setData({ confirmed, recovered, deaths, lastUpdate })
      } catch (error) {
        setIsError(true)
      }
    }

    fetchData()
  }, [])

  return { data, isError }
}
