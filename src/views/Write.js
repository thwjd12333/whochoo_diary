import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { dFormat } from '../common/Utils'

const Write = () => {
  const [content, setContent] = useState('')
  const [searchParams] = useSearchParams()
  const selectedDate = new Date(Number(searchParams.get('date')))
  const selectedEmotion = searchParams.get('emotion')
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const navigator = useNavigate()

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
      default:
        return ''
    }
  }

  const onSave = () => {
    const target = {
      emotion: selectedEmotion,
      content,
      date: selectedDate,
      userId: user.id,
    }
    dispatch({ type: 'ACTION_ADD_LOG', value: target })
    navigator('/m')
  }

  return (
    <div>
      <div>{dFormat(selectedDate, 'YYYY년 M월 D일')}</div>
      <div>{getEmotion(selectedEmotion)}</div>
      <hr />
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <div>
        <button onClick={onSave}>저장</button>
      </div>
    </div>
  )
}
export default Write
