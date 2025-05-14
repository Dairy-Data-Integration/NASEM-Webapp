import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/LandingPage/HeroSection";
import Navbar from "./components/LandingPage/Navbar";
import LoginPage from "./components/LoginPage/Login"; 
import SignupPage from './components/SignupPage/SignupPage';
import DietPage from './components/DietPage/DietPage';

const App = () => {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><HeroSection /></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path="/diet" element={<><Navbar /> <DietPage /></>} />
          <Route path="/library" element={<><Navbar /></>} />
          <Route path="/outputs" element={<><Navbar /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;