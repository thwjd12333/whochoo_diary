import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({ user }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      console.log('-------------')
      console.log(user)
      console.log('-------------')
      navigate('/m')
    }
  }, [])

  return (
    <>
      <div onClick={() => navigate('/join')}>회원가입</div>
      <div onClick={() => navigate('/m')}>로그인</div>
    </>
  )
}

export default Login
