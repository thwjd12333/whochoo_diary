import React from 'react'
import moment from 'moment'

const CalendarCell = ({ ended, today, date }) => {
  const styles = {
    outer: {
      position: 'relative',
      zIndex: '99',
      padding: '13px',
      boxSizing: 'border-box',
      width: '14.285714%',
      height: '80px',
      borderRight: '1px solid black',
      textAlign: 'left',
    },
    inner: {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      right: 0,
    },
  }
  if (ended) styles.outer.borderRight = ''
  if (today) styles.outer.backgroundColor = 'green'
  return (
    <>
      <div style={styles.outer}>
        {moment(date).format('D')}
        <div style={styles.inner}>A</div>
      </div>
    </>
  )
}
export default CalendarCell
