import React, { useState } from 'react'
import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components'
import { useFetchData, BASIC_URL } from './api'
import logo from './covid.png'

function App() {
  const [country, setCountry] = useState('')
  const [data, isError] = useFetchData(BASIC_URL, country)

  const handleCountryChange = (country) => {
    setCountry(country)
  }

  return (
    <>
      <img src={logo} alt="covid" />
      {isError && <div>Something went wrong when fetching basic data</div>}
      {!data ? (
        <div>Loading basic data...</div>
      ) : (
        <div className={styles.container}>
          <Cards {...data} />
          <CountryPicker onCountryChange={handleCountryChange} />
          <Chart />
        </div>
      )}
    </>
  )
}

export default App
