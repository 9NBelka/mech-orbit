import { useEffect, useState, Suspense } from 'react';
import { Routes, Route, useParams, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './App.scss';

import MechOrbitRU from './pages/MechOrbitRU/MechOrbitRU';
import MechOrbitUA from './pages/MechOrbitUA/MechOrbitUA';
import MechOrbitEN from './pages/MechOrbitEN/MechOrbitEN';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CompleteRegistration from './pages/Register/CompleteRegistration/CompleteRegistration';
import LangWrapper from './components/LangWrapper/LangWrapper';

const SUPPORTED_LANGS = ['ua', 'ru', 'en'];
const DEFAULT_LANG = 'ua';

function LangPage({ isScrolled, scrollToSection }) {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Нормализуем и проверяем язык
  const currentLang = lang ? lang.toLowerCase() : null;

  useEffect(() => {
    // Если зашли на корень "/" → редиректим на дефолтный или сохранённый
    if (!currentLang) {
      const savedLang = localStorage.getItem('preferredLang') || DEFAULT_LANG;
      navigate(`/${savedLang}`, { replace: true });
      return;
    }

    // Если язык не поддерживается → на дефолтный
    if (!SUPPORTED_LANGS.includes(currentLang)) {
      navigate(`/${DEFAULT_LANG}`, { replace: true });
      return;
    }

    // Сохраняем выбор пользователя
    localStorage.setItem('preferredLang', currentLang);
  }, [currentLang, navigate]);

  // Определяем, какой компонент рендерить
  let PageComponent = MechOrbitUA;

  if (currentLang === 'ru') {
    PageComponent = MechOrbitRU;
  } else if (currentLang === 'en') {
    PageComponent = MechOrbitEN;
  }

  // Если язык некорректный — уже отредиректили выше, поэтому здесь безопасно
  return <PageComponent isScrolled={isScrolled} scrollToSection={scrollToSection} />;
}

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
          path='/:lang?'
          element={<LangWrapper isScrolled={isScrolled} scrollToSection={scrollToSection} />}>
          <Route index element={null} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          {/* <Route path='complete-registration' element={<CompleteRegistration />} /> */}
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

        {/* если кто-то зайдёт без языка вообще — 404 */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {/* <Routes>
  
        <Route
          path='/:lang?'
          element={<LangPage isScrolled={isScrolled} scrollToSection={scrollToSection} />}
        />

        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/complete-registration' element={<CompleteRegistration />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

     
        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
    </Suspense>
  );
}
