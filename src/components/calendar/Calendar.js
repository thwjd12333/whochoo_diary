import React, { useEffect, useState } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarRow from './CalendarRow'
import moment from 'moment'
import { getWeek } from '../../common/Utils'
import PropTypes from 'prop-types'

const Calendar = ({ date, onSelected, onChangeMonth, csCell }) => {
  const [myDate, setMyDate] = useState(date)
  const [weekCount, setWeekCount] = useState(0)

  const styles = {
    border: '1px solid black',
  }

  const setMonth = num => {
    const temp = moment(myDate)
    temp.month(temp.month() + num)
    setMyDate(temp.toDate())
    onChangeMonth(temp.toDate())
  }

  useEffect(() => {
    onChangeMonth(date)
    setWeekCount(getWeek(myDate))
  }, [myDate, onChangeMonth, setWeekCount, date])

  return (
    <>
      <CalendarHeader
        date={myDate}
        onNext={() => setMonth(1)}
        onPrev={() => setMonth(-1)}
      />
      <div style={styles}>
        {[...Array(weekCount).keys()].map(idx => (
          <CalendarRow
            onSelected={onSelected}
            date={myDate}
            week={idx + 1}
            key={idx}
            csCell={csCell}
          />
        ))}
      </div>
    </>
  )
}

Calendar.defaultProps = {
  date: new Date(),
}
Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
}
export default Calendar
