import React from 'react'
import styles from './Cards.module.css'
import { Grid } from '@material-ui/core'
import Card from '../Card/Card'

function Cards({ lastUpdate, ...infos }) {
  const messages = ['active cases of', 'recoveries from', 'deaths caused by']
  const updateDate = new Date(lastUpdate).toDateString()

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {Object.keys(infos).map((key, index) => (
          <Card
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
