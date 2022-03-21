import React, { useState } from 'react'
import Modal from '../components/Modal'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { dFormat } from '../common/Utils'

const Emotion = () => {
  const navigator = useNavigate()
  const [searchParams] = useSearchParams()

  const [selectedDate, setSelectedDate] = useState(
    searchParams.get('date')
      ? new Date(Number(searchParams.get('date')))
      : null,
  )

  const [visible, setVisible] = useState(!selectedDate)

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
      >
        <div>
          {[...Array(5).keys()]
            .map(idx => {
              const now = new Date()
              const targetDate = new Date(
                now.getTime() - 1000 * 60 * 60 * 24 * idx,
              )
              return (
                // <button onclick={temp())}}>
                <button
                  key={idx}
                  onClick={() => {
                    setVisible(false)
                    setSelectedDate(targetDate)
                  }}
                >
                  {dFormat(targetDate, 'M.D')}
                </button>
              )
            })
            .reverse()}
        </div>
      </Modal>
    </>
  )
}
export default Emotion
