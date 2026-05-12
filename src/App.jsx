import { Routes, Route } from 'react-router-dom';
import { usePortfolio } from './context/PortfolioContext';
import LandingPage from './pages/LandingPage';
import BuilderPage from './pages/BuilderPage';
import './App.css';

function App() {
  const { state } = usePortfolio();

  return (
    <div className="app" data-theme={state.theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/builder" element={<BuilderPage />} />
      </Routes>
    </div>
  );
}

export default App;
