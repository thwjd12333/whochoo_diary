import React from 'react'
import PropTypes from 'prop-types'
import { dFormat } from '../../common/Utils'

const CalendarHeader = ({ date, onPrev, onNext }) => {
  return (
    <div>
      <button onClick={onPrev}>이전</button>
      <span>{dFormat(date, 'YYYY년 M월')} </span>
      <button onClick={onNext}>이후</button>
    </div>
  )
}

CalendarHeader.propTypes = {
  date: PropTypes.instanceOf(Date),
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
}
export default CalendarHeader
