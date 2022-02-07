import React, { useEffect, useState } from 'react'
import CalendarCell from './CalendarCell'
import PropTypes from 'prop-types'
import { dFormat } from '../../common/Utils'

const ONEDAY = 1000 * 60 * 60 * 24

const CalendarRow = ({ date, week, onSelected }) => {
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
      {[...Array(7).keys()].map(idx => {
        return (
          <CalendarCell
            onClick={onSelected}
            isThisMonth={getDate(idx).getMonth() === date.getMonth()}
            thisDate={getDate(idx)}
            today={isToday(idx)}
            key={idx}
            ended={idx === 6}
          />
        )
      })}
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
