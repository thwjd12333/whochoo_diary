import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const onclick = () => {
    navigate('/m')
  }

  return (
    <>
      <div onClick={onclick}>Login</div>
    </>
  )
}

export default Login
