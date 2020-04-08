import React from 'react'
import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components'
import { useFetchData } from './api'
// import axios from 'axios'

const URL = 'https://covid19.mathdro.id/api'

function App() {
  const [data, isFetchDataError] = useFetchData(URL)
  const [dailyData, isFetchDailyDataError] = useFetchData(`${URL}/daily`)

  return (
    <>
      {isFetchDataError && <div>Something went wrong when fetching basic data</div>}
      {isFetchDailyDataError && <div>Something went wrong when fetching daily data</div>}
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <Cards {...data} />
          <CountryPicker />
          <Chart />
        </div>
      )}
    </>
  )
}

export default App
