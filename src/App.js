import React from 'react'
import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components'
import { useFetchData } from './api'

function App() {
  const { data, isError } = useFetchData()
  console.log(data)

  return (
    <>
      {isError && <div>Something went wrong when fetching api</div>}
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
