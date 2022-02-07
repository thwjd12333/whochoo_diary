import React from 'react'
import 'react-calendar/dist/Calendar.css'
import MyCalendar from '../components/calendar/Calendar'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigator = useNavigate()
  const openEmotion = d => {
    // 1. 쿼리 asadf/afsd?date=b&emotion=2
    // 2. 패스 asadf/b
    // 3. 안보이는 쿼리 asadf {date: b}
    navigator(`/emotion?date=${d.getTime()}`)
  }
  const clickPlus = () => {
    openEmotion()
  }
  return (
    <>
      <MyCalendar onSelected={openEmotion} />
      <div>
        <button onClick={clickPlus}>+</button>
      </div>
    </>
  )
}
export default Main
