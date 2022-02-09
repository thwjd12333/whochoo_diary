import React from 'react'
import 'react-calendar/dist/Calendar.css'
import MyCalendar from '../components/calendar/Calendar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Main = () => {
  const navigator = useNavigate()
  const openEmotion = d => {
    const param = d ? `?date=${d?.getTime()}` : ''
    navigator(`/emotion${param}`)
  }

  const dayLog = useSelector(state => state.dayLog)
  console.log(dayLog)

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
