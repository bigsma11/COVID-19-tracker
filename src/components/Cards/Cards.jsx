import React from 'react'
import styles from './Cards.module.css'
import { Grid } from '@material-ui/core'
import Card from '../Card/Card'

function Cards({ lastUpdate, confirmed, recovered, deaths }) {
  const infos = { confirmed, recovered, deaths }
  const messages = ['active cases of', 'recoveries from', 'deaths caused by']
  const updateDate = new Date(lastUpdate).toDateString()

  return !confirmed ? (
    <div>Loading cards data...</div>
  ) : (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {Object.keys(infos).map((key, index) => (
          <Card
            name={key}
            number={infos[key].value}
            key={key}
            updateDate={updateDate}
            message={messages[index]}
          />
        ))}
      </Grid>
    </div>
  )
}

export default Cards
