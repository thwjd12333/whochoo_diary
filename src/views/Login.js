import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Login = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user.id) {
      console.log('-------------')
      console.log(user.id)
      console.log('-------------')
      navigate('/m')
    }
  })

  return (
    <>
      <div onClick={() => navigate('/join')}>회원가입</div>
      <div onClick={() => navigate('/m')}>로그인</div>
    </>
  )
}

Login.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    pw: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
  }),
}

export default Login
