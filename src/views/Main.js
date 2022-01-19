import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  const onclick = () => {
    navigate('/emotion')
  }
  return (
    <>
      <div>Main</div>
      <button onClick={onclick}>+</button>
    </>
  )
}
export default Main
