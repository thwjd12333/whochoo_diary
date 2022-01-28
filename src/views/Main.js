import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import MyCalendar from '../components/calendar/Calendar'
import { dFormat } from '../common/Utils'

const Main = () => {
  console.log('main render')
  const [value, onChange] = useState(new Date())

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="US"
        formatDay={(_, d) => dFormat(d, 'D')}
      />
      <MyCalendar />
    </>
  )
}
export default Main
