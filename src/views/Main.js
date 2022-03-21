import React, { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import MyCalendar from '../components/calendar/Calendar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'

const displayEmotion = (emotionCd, key) => {
  switch (emotionCd) {
    case 1:
      return <div key={key}>기쁨</div>
    case 2:
      return <div key={key}>분노</div>
    case 3:
      return <div key={key}>슬픔</div>
    case 4:
      return <div key={key}>기쁨2</div>
    case 5:
      return <div key={key}>분노2</div>
    case 6:
      return <div key={key}>슬픔2</div>
    case 7:
      return <div key={key}>기쁨3</div>
    case 8:
      return <div key={key}>분노3</div>
    case 9:
      return <div key={key}>슬픔3</div>
    default:
      return <div key={key}>슬픔3</div>
  }
}

const Main = () => {
  const [curDate, setCurDate] = useState(new Date())
  const [thisMonthLogs, setThisMonthLogs] = useState([])
  const navigator = useNavigate()
  const openEmotion = d => {
    const param = d ? `?date=${d?.getTime()}` : ''
    navigator(`/emotion${param}`)
  }

  const dayLog = useSelector(state => state.dayLog)

  useEffect(() => {
    const startMyDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1)
    const endMyDate = new Date(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, 1).getTime() - 1,
    )
    const filteredDayLog = dayLog.filter(it => {
      const base = moment(it.date)
      const sDate = moment(startMyDate)
      const eDate = moment(endMyDate)
      return sDate < base && base < eDate
    })
    setThisMonthLogs(filteredDayLog)
  }, [dayLog, curDate, setThisMonthLogs])

  const onCsCell = d => {
    const startDate = new Date(d.getFullYear(), d.getMonth(), d.getDate())
    const endDate = new Date(
      new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0).getTime() - 1,
    )
    const thisDateLog = thisMonthLogs.filter(it => {
      const base = moment(it.date)
      const sDate = moment(startDate)
      const eDate = moment(endDate)
      return sDate < base && base < eDate
    })
    return (
      <>
        {thisDateLog.length > 0 && (
          <div>{thisDateLog.map((it, idx) => displayEmotion(it, idx))}</div>
        )}
      </>
    )
  }

  return (
    <>
      <MyCalendar
        date={curDate}
        onSelected={openEmotion}
        onChangeMonth={d => setCurDate(d)}
        csCell={onCsCell}
      />
      <div>
        <button onClick={() => openEmotion()}> + </button>
      </div>
      <p>이달의 Log: {thisMonthLogs.length}</p>
      <hr />
      {thisMonthLogs.map((it, idx) => (
        <div key={idx}>
          {displayEmotion(it, idx)}
          {it.content}
          <hr />
        </div>
      ))}
    </>
  )
}
export default Main
