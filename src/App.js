import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JoinContainer from './containers/JoinContainer'
import Login from './views/Login'
import Main from './views/Main'
import Emotion from './views/Emotion'
import LoginContainer from './containers/LoginContainer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/join" element={<JoinContainer />} />
          <Route path="/m" element={<Main />} />
          <Route path="/emotion" element={<Emotion />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
