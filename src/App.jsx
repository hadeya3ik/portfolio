import Home from './pages/home/home';
import Play from './pages/play/play';
import NavBar from './components/navbar/navBar';
import Footer from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import { ModeProvider } from './pages/modeContext';

function App() {
  return (
    <ModeProvider> {/* Wrap everything that needs access to the dark mode state */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
      <Footer />
    </ModeProvider>
  );
}

export default App;