import React, { useState } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarRow from './CalendarRow'
import moment from 'moment'

const Calendar = ({ date }) => {
  let curDate
  if (date) curDate = date
  else curDate = new Date()

  const [myDate, setMyDate] = useState(curDate)

  const styles = {
    border: '1px solid black',
  }

  const setMonth = num => {
    const temp = moment(myDate)
    temp.month(temp.month() + num)
    setMyDate(temp.toDate())
  }

  const onNext = () => {
    setMonth(1)
  }

  const onPrev = () => {
    setMonth(-1)
  }

  return (
    <>
      <CalendarHeader date={myDate} onNext={onNext} onPrev={onPrev} />
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
