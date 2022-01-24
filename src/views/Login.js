import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const onJoin = () => {
    navigate('/join')
  }
  const onLogin = () => {
    navigate('/m')
  }

  return (
    <>
      <div onClick={onJoin}>회원가입</div>
      <div onClick={onLogin}>로그인</div>
    </>
  )
}

export default Login
