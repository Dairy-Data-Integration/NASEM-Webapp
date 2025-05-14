import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/LandingPage/HeroSection";
import Navbar from "./components/LandingPage/Navbar";
import LoginPage from "./components/LoginPage/Login"; 
import SignupPage from './components/SignupPage/SignupPage';

const App = () => {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><HeroSection /></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;