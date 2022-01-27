import React, { useState } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarRow from './CalendarRow'
import moment from 'moment'
import { cb, commaNum, dFormat, randomNum } from '../../common/Utils'
import PropTypes from 'prop-types'

const Calendar = ({ date }) => {
  const [myDate, setMyDate] = useState(date)

  const styles = {
    border: '1px solid black',
  }

  const setMonth = num => {
    const temp = moment(myDate)
    temp.month(temp.month() + num)
    setMyDate(temp.toDate())
  }

  return (
    <>
      <CalendarHeader
        date={myDate}
        onNext={cb(setMonth, 1)}
        onPrev={cb(setMonth, -1)}
      />
      <div style={styles}>
        <CalendarRow date={myDate} week={1} />
        <CalendarRow date={myDate} week={2} />
        <CalendarRow date={myDate} week={3} />
        <CalendarRow date={myDate} week={4} />
        <CalendarRow date={myDate} week={5} />
        <CalendarRow date={myDate} week={6} />
      </div>
    </>
  )
}
Calendar.defaultProps = {
  date: new Date(),
}
Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
}
export default Calendar
