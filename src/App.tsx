import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overlay from './component/overlay'

// Import komponen halaman dengan lazy loading
const Login = lazy(() => import('./pages/login'));
const Home = lazy(() => import('./pages/home'));
const Application = lazy(() => import('./pages/application'));
const Commision = lazy(() => import('./pages/commision'));

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Overlay text="Loading..."/>}><Login /></Suspense>} />
        <Route path="/home" element={<Suspense fallback={<Overlay text="Loading..."/>}><Home /></Suspense>} />
        <Route path="/application" element={<Suspense fallback={<Overlay text="Loading..."/>}><Application /></Suspense>} />
        <Route path="/commision" element={<Suspense fallback={<Overlay text="Loading..."/>}><Commision /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
