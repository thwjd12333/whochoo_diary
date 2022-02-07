import React, { useState } from 'react'
import Modal from '../components/Modal'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Emotion = () => {
  const navigator = useNavigate()
  const [searchParams] = useSearchParams()
  const selectedDate = new Date(Number(searchParams.get('date')))

  const [visible, setVisible] = useState(selectedDate === 'undefined')

  const selectEmotion = eCode => {
    navigator(`/write?date=${selectedDate.getTime()}&emotion=${eCode}`)
  }

  return (
    <>
      오늘의 감정을 골라보세요.
      <hr />
      <div onClick={() => selectEmotion(1)}>기쁨</div>
      <div onClick={() => selectEmotion(2)}>분노</div>
      <div onClick={() => selectEmotion(3)}>슬픔</div>
      <div onClick={() => selectEmotion(4)}>기쁨2</div>
      <div onClick={() => selectEmotion(5)}>분노2</div>
      <div onClick={() => selectEmotion(6)}>슬픔2</div>
      <div onClick={() => selectEmotion(7)}>기쁨3</div>
      <div onClick={() => selectEmotion(8)}>분노3</div>
      <div onClick={() => selectEmotion(9)}>슬픔3</div>
      <hr />
      <Modal
        visible={visible}
        closable={true}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}
export default Emotion
