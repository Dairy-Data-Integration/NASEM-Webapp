import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/LandingPage/HeroSection";
import Navbar from "./components/LandingPage/Navbar";
import LoginPage from "./components/LoginPage/Login"; 
import SignupPage from './components/SignupPage/SignupPage';
import DietPage from './components/DietPage/DietPage';
import { AnimalInputsFormProvider } from './components/DietPage/Sidebar/AnimalInputsFormContext';

const App = () => {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><HeroSection /></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />

          // Wrap the diet route with the AnimalInputsFormProvider to share form state across components
          <Route 
            path="/diet" 
            element={
              <AnimalInputsFormProvider>
                <div className="flex flex-col h-screen">
                  <Navbar />
                  <DietPage />
                </div>
              </AnimalInputsFormProvider>
            } /> 
            
          <Route path="/library" element={<><Navbar /></>} />
          <Route path="/outputs" element={<><Navbar /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;