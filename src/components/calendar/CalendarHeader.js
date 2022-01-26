import React from 'react'

const CalendarHeader = ({ date, onPrev, onNext }) => {
  return (
    <div>
      <button onClick={onPrev}>이전</button>
      <span>{date.getMonth() + 1} 월</span>
      <button onClick={onNext}>이후</button>
    </div>
  )
}
export default CalendarHeader
