import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import MechOrbitRU from './pages/MechOrbitRU/MechOrbitRU';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CompleteRegistration from './pages/Register/CompleteRegistration/CompleteRegistration';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Suspense
        fallback={
          <div className='loader-spinner'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        }>
        <Routes>
          <Route
            path='/'
            element={<MechOrbitRU scrollToSection={scrollToSection} isScrolled={isScrolled} />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/complete-registration' element={<CompleteRegistration />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
