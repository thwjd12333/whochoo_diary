import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { dFormat } from '../common/Utils'

const Write = () => {
  const [searchParams] = useSearchParams()
  const selectedDate = new Date(Number(searchParams.get('date')))
  const selectedEmotion = searchParams.get('emotion')

  const getEmotion = code => {
    switch (parseInt(code)) {
      case 1:
        return '기쁨'
      case 2:
        return '분노'
      case 3:
        return '슬픔'
      case 4:
        return '기쁨2'
      case 5:
        return '분노2'
      case 6:
        return '슬픔2'
      case 7:
        return '기쁨3'
      case 8:
        return '분노3'
      case 9:
        return '슬픔3'
    }
  }

  return (
    <div>
      <div>{dFormat(selectedDate, 'YYYY년 M월 D일')}</div>
      <div>{getEmotion(selectedEmotion)}</div>
      <hr />
      <textarea />
      <div>
        <button>저장</button>
      </div>
    </div>
  )
}
export default Write
