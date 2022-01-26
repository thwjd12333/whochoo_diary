import React, { useEffect, useState } from 'react'
import CalendarCell from './CalendarCell'
import moment from 'moment'

const ONEDAY = 1000 * 60 * 60 * 24

const CalendarRow = ({ date, week }) => {
  const firstDate = new Date(date)
  firstDate.setDate(1)

  let weekDate = new Date(firstDate.getTime() + ONEDAY * 7 * (week - 1))
  const weekDay = weekDate.getDay()

  const [weekFirstDate] = useState(
    new Date(weekDate.getTime() - ONEDAY * weekDay),
  )

  const getDate = plusDate => {
    return new Date(weekFirstDate.getTime() + plusDate * ONEDAY).getDate()
  }

  const isToday = plusDate => {
    const format = 'YYYYMMDD'
    const today = moment(new Date()).format(format)
    const thisDate = moment(
      new Date(weekFirstDate.getTime() + plusDate * ONEDAY),
    ).format(format)
    return today === thisDate
  }

  const styles = {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    borderBottom: '1px solid black',
  }
  return (
    <div style={styles}>
      <CalendarCell num={getDate(0)} today={isToday(0)} />
      <CalendarCell num={getDate(1)} today={isToday(1)} />
      <CalendarCell num={getDate(2)} today={isToday(2)} />
      <CalendarCell num={getDate(3)} today={isToday(3)} />
      <CalendarCell num={getDate(4)} today={isToday(4)} />
      <CalendarCell num={getDate(5)} today={isToday(5)} />
      <CalendarCell num={getDate(6)} today={isToday(6)} ended="true" />
    </div>
  )
}
export default CalendarRow