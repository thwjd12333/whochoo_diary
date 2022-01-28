import React from 'react'
import PropTypes from 'prop-types'
import { dFormat } from '../../common/Utils'

const CalendarCell = ({ ended, today, thisDate, isThisMonth }) => {
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
  if (!isThisMonth) styles.outer.backgroundColor = 'gray'
  if (today) styles.outer.backgroundColor = 'green'

  return (
    <>
      <div style={styles.outer}>
        {dFormat(thisDate, 'D')}
        <div style={styles.inner}>A</div>
      </div>
    </>
  )
}

CalendarCell.defaultProps = {
  ended: false,
  today: false,
  thisDate: new Date(),
  isThisMonth: true,
}
CalendarCell.propTypes = {
  ended: PropTypes.bool,
  today: PropTypes.bool,
  thisDate: PropTypes.instanceOf(Date),
  isThisMonth: PropTypes.bool,
}

export default CalendarCell
