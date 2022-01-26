import React from 'react'
import moment from 'moment'

const CalendarHeader = ({ date, onPrev, onNext }) => {
  return (
    <div>
      <button onClick={onPrev}>이전</button>
      <span>{moment(date).format('YYYY년 M월')} </span>
      <button onClick={onNext}>이후</button>
    </div>
  )
}
export default CalendarHeader
