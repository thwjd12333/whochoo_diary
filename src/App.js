import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import Emotion from './views/Emotion'
import Join from './views/Join'
import Login from './views/Login'
import Write from './views/Write'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/m" element={<Main />} />
          <Route path="/emotion" element={<Emotion />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
