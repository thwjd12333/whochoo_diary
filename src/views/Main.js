import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import MyCalendar from '../components/calendar/Calendar'
import { dFormat } from '../common/Utils'

const Main = () => {
  const [value, onChange] = useState(new Date())
  const onTileContents = param => {
    return <div>1</div>
  }

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="US"
        formatDay={(_, d) => dFormat(d, 'D')}
        tileContent={onTileContents}
      />
      <MyCalendar />
    </>
  )
}
export default Main
