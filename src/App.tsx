import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overlay from './component/overlay'

// Import komponen halaman dengan lazy loading
const Login = lazy(() => import('./pages/login'));
const Home = lazy(() => import('./pages/home'));
const Application = lazy(() => import('./pages/application'));
const Commision = lazy(() => import('./pages/commision'));
const NewApp = lazy(()=>import('./pages/new'));
const NewApp2 = lazy(()=>import('./pages/new2'));
const NewAppMv = lazy(()=>import('./pages/newMv'));
const NewAppMv2 = lazy(()=>import('./pages/newMv2'));
const KlaimH = lazy(()=>import('./pages/klaimH'));
const KlaimMv = lazy(()=>import('./pages/klaimMv'));
const EndorsMv = lazy(()=>import('./pages/endorsMv'));
const EndorsH = lazy(()=>import('./pages/endorsH'));
const Withdraw = lazy(()=>import('./pages/withdraw'))

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="agent/" element={<Suspense fallback={<Overlay text="Loading..."/>}><Login /></Suspense>} />
        <Route path="agent/home" element={<Suspense fallback={<Overlay text="Loading..."/>}><Home /></Suspense>} />
        <Route path="agent/application" element={<Suspense fallback={<Overlay text="Loading..."/>}><Application /></Suspense>} />
        <Route path="agent/application/newharta" element={<Suspense fallback={<Overlay text="Loading..."/>}><NewApp /></Suspense>} />
        <Route path="agent/application/newmv" element={<Suspense fallback={<Overlay text="Loading..."/>}><NewAppMv /></Suspense>} />
        <Route path="agent/application/newmv/:nik" element={<Suspense fallback={<Overlay text="Loading..."/>}><NewAppMv2 /></Suspense>} />
        <Route path="agent/application/newharta/:nik" element={<Suspense fallback={<Overlay text="Loading..."/>}><NewApp2 /></Suspense>} />
        <Route path="agent/application/klaimharta" element={<Suspense fallback={<Overlay text="Loading..."/>}><KlaimH /></Suspense>} />
        <Route path="agent/application/klaimmv" element={<Suspense fallback={<Overlay text="Loading..."/>}><KlaimMv /></Suspense>} />
        <Route path="agent/application/endorsharta" element={<Suspense fallback={<Overlay text="Loading..."/>}><EndorsH /></Suspense>} />
        <Route path="agent/application/endorsmv" element={<Suspense fallback={<Overlay text="Loading..."/>}><EndorsMv /></Suspense>} />
        <Route path="agent/commision" element={<Suspense fallback={<Overlay text="Loading..."/>}><Commision /></Suspense>} />
        <Route path="agent/commision/withdraw" element={<Suspense fallback={<Overlay text="Loading..."/>}><Withdraw /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
