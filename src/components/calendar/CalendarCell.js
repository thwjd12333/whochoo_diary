import React from 'react'
import PropTypes from 'prop-types'
import { dFormat } from '../../common/Utils'

const CalendarCell = ({ ended, today, date = new Date() }) => {
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
        {dFormat(date, 'D')}
        <div style={styles.inner}>A</div>
      </div>
    </>
  )
}

CalendarCell.defaultProps = {
  ended: false,
  today: false,
  date: new Date(),
}
CalendarCell.propTypes = {
  ended: PropTypes.bool,
  today: PropTypes.bool,
  date: PropTypes.instanceOf(Date),
}

export default CalendarCell
