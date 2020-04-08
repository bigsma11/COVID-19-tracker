import React from 'react'
import { Grid, Card as MaterialCard, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Card.module.css'

function Card({ name, number, updateDate, message }) {
  return (
    <Grid item component={MaterialCard} xs={12} md={3} className={cx(styles.card, styles[name])}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {name[0].toUpperCase() + name.slice(1)}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={number} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{updateDate}</Typography>
        <Typography variant="body2">Number of {message} COVID-19</Typography>
      </CardContent>
    </Grid>
  )
}

export default Card
