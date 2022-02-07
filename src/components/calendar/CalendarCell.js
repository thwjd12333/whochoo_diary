import React from 'react'
import PropTypes from 'prop-types'
import { dFormat } from '../../common/Utils'

const CalendarCell = ({ ended, today, thisDate, isThisMonth, onClick }) => {
  const styles = {
    outer: {
      position: 'relative',
      zIndex: 99,
      padding: '13px',
      boxSizing: 'border-box',
      width: '14.285714%',
      height: '80px',
      borderRight: '1px solid black',
      textAlign: 'left',
    },
    number: {
      position: 'relative',
      zIndex: 2,
    },
    inner: {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      right: 0,
      height: '100%',
      width: '100%',
    },
  }
  if (ended) styles.outer.borderRight = ''
  if (!isThisMonth) styles.outer.backgroundColor = 'gray'
  if (today) styles.outer.backgroundColor = 'green'

  const onThisClick = () => {
    if (onClick) onClick(thisDate)
  }

  return (
    <>
      <div style={styles.outer} onClick={onThisClick}>
        <div style={styles.inner}>A</div>
        <span style={styles.number}>{dFormat(thisDate, 'D')}</span>
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
