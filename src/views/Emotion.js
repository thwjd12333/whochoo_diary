import React, { useState } from 'react'
import Modal from '../components/Modal'
const Emotion = () => {
  const [visible, setVisible] = useState(true)
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      오늘의 감정을 골라보세요.
      <Modal visible={visible} closable={true} onClose={onClose} />
    </>
  )
}
export default Emotion
