import React from 'react'
import { Grid, Card as MaterialCard, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

function Card({ number, updateDate, message }) {
  return (
    <Grid item component={MaterialCard}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Confirmed
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
