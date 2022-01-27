import React, { useEffect, useState } from 'react'
import CalendarCell from './CalendarCell'
import PropTypes from 'prop-types'
import { dFormat } from '../../common/Utils'

const ONEDAY = 1000 * 60 * 60 * 24

const CalendarRow = ({ date = new Date(), week }) => {
  const [weekFirstDate, setWeekFirstDate] = useState(null)

  useEffect(() => {
    const firstDate = new Date(date)
    firstDate.setDate(1)

    let weekDate = new Date(firstDate.getTime() + ONEDAY * 7 * (week - 1))
    const weekDay = weekDate.getDay()
    setWeekFirstDate(new Date(weekDate.getTime() - ONEDAY * weekDay))
  }, [date, week])

  const getDate = plusDate => {
    if (!weekFirstDate) return new Date()
    return new Date(weekFirstDate.getTime() + plusDate * ONEDAY)
  }

  const isToday = plusDate => {
    if (!weekFirstDate) return false
    const format = 'YYYYMMDD'
    const today = dFormat(new Date(), format)
    const thisDate = dFormat(
      new Date(weekFirstDate.getTime() + plusDate * ONEDAY),
      format,
    )
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
      <CalendarCell date={getDate(0)} today={isToday(0)} />
      <CalendarCell date={getDate(1)} today={isToday(1)} />
      <CalendarCell date={getDate(2)} today={isToday(2)} />
      <CalendarCell date={getDate(3)} today={isToday(3)} />
      <CalendarCell date={getDate(4)} today={isToday(4)} />
      <CalendarCell date={getDate(5)} today={isToday(5)} />
      <CalendarCell date={getDate(6)} today={isToday(6)} ended={true} />
    </div>
  )
}

CalendarRow.defaultProps = {
  date: new Date(),
}
CalendarRow.propTypes = {
  date: PropTypes.instanceOf(Date),
  week: PropTypes.number.isRequired,
}
export default CalendarRow
