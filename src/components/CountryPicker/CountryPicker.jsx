import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { useFetchData, BASIC_URL } from '../../api'

function CountryPicker({ onCountryChange }) {
  const [countriesData, isError] = useFetchData(`${BASIC_URL}/countries`)

  return (
    <>
      {isError && <div>Something went wrong when fetch countries data</div>}
      {!countriesData ? (
        <div>Loading countries data...</div>
      ) : (
        <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e) => onCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countriesData.countries.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      )}
    </>
  )
}

export default CountryPicker
