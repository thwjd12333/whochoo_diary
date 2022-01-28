import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
const Join = () => {
  const [user, setUser] = useState({ id: '', pw: '', nickName: '' })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onclick = () => {
    window.console.log(user)
    dispatch({ type: 'ACTION_SAVE_ALL', value: user })
    navigate('/m')
  }

  return (
    <>
      <div>아이디</div>
      <input
        value={user.id || ''}
        onChange={e => {
          setUser({
            ...user,
            id: e.target.value,
          })
        }}
      />
      <div>비밀번호</div>
      <input
        value={user.pw || ''}
        onChange={e => {
          setUser({
            ...user,
            pw: e.target.value,
          })
        }}
      />
      <div>닉네임</div>
      <input
        value={user.nickName || ''}
        onChange={e => {
          setUser({
            ...user,
            nickName: e.target.value,
          })
        }}
      />
      <div onClick={onclick}>Login</div>
    </>
  )
}

Join.propTypes = {
  saveAll: PropTypes.func,
}

export default Join
