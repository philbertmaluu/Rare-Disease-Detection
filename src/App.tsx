import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DiagnosisProvider, useDiagnosis } from './context/DiagnosisContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import DiagnosisPage from './pages/DiagnosisPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

// Results route wrapper to check if results exist
const ResultsRoute: React.FC = () => {
  const { state } = useDiagnosis();
  
  // Redirect to diagnosis if no results
  if (state.results.length === 0 && !state.isLoading) {
    return <Navigate to="/diagnosis" replace />;
  }
  
  return <ResultsPage />;
};

function App() {
  return (
    <DiagnosisProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/diagnosis" element={<DiagnosisPage />} />
              <Route path="/results" element={<ResultsRoute />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DiagnosisProvider>
  );
}

export default App;