import React from 'react'
import { useFetchData, BASIC_URL } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

function Chart({ data: { confirmed, deaths, recovered }, country }) {
  const [dailyData, isError] = useFetchData(`${BASIC_URL}/daily`)

  if (!dailyData) return <div>Loading dailyData...</div>

  const modifiedData = dailyData.map(({ confirmed, deaths, reportDate }) => ({
    confirmed: confirmed.total,
    deaths: deaths.total,
    date: reportDate,
  }))

  const lineChart = (
    <Line
      data={{
        labels: modifiedData.map(({ date }) => date),
        datasets: [
          {
            data: modifiedData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: modifiedData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  )

  const barChart = confirmed && (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  )

  return (
    <>
      {isError && <div>Something went wrong when fetching daily data</div>}
      <div className={styles.container}>{country ? barChart : lineChart}</div>
    </>
  )
}

export default Chart
