import React, { useState } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarRow from './CalendarRow'
import moment from 'moment'
import { cb } from '../../common/Utils'

const Calendar = ({ date = new Date() }) => {
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
export default Calendar
