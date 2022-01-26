import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import MyCalendar from '../components/calendar/Calendar'

const Main = () => {
  const [value, onChange] = useState(new Date())
  // let hiddenCount = 0
  // const [count, setCount] = useState(0)
  // const navigate = useNavigate()
  // console.log(new Date().getTime())
  const onTileContents = param => {
    console.log(param)
    return <div>1</div>
  }

  return (
    <>
      {/*<div>Main</div>*/}
      {/*<button onClick={() => navigate('/emotion')}>+</button>*/}
      {/*<button onClick={() => (hiddenCount = hiddenCount + 1)}>add</button>*/}
      {/*<button onClick={() => setCount(hiddenCount)}>display</button>*/}
      {/*<span>{count}</span>*/}
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="US"
        formatDay={(_, d) => {
          return moment(d).format('D')
        }}
        tileContent={onTileContents}
      />
      <MyCalendar />
    </>
    //   ({ activeStartDate, date, view }) =>
    // view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null
  )
}
export default Main
