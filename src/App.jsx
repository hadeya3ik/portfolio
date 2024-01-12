import Home from './pages/home/home'
import Play from './pages/play/play'
import NavBar from './components/navbar/navBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/play" element={<play />} />
        </Routes>
      </>
  )
}

export default App