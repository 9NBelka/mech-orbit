// src/components/LangWrapper.jsx (или прямо в App, если хочешь)

import { useParams, Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import MechOrbitUA from '../../pages/MechOrbitUA/MechOrbitUA';
import MechOrbitRU from '../../pages/MechOrbitRU/MechOrbitRU';
import MechOrbitEN from '../../pages/MechOrbitEN/MechOrbitEN';

const SUPPORTED_LANGS = ['ua', 'ru', 'en'];
const DEFAULT_LANG = 'ua';

export default function LangWrapper({ isScrolled, scrollToSection }) {
  const { lang } = useParams();
  const currentLang = lang ? lang.toLowerCase() : null;

  useEffect(() => {
    if (!currentLang) {
      // зашли на корень → редирект на сохранённый или дефолтный
      const saved = localStorage.getItem('preferredLang') || DEFAULT_LANG;
      window.location.replace(`/${saved}`);
      return;
    }

    if (!SUPPORTED_LANGS.includes(currentLang)) {
      window.location.replace(`/${DEFAULT_LANG}`);
      return;
    }

    localStorage.setItem('preferredLang', currentLang);
  }, [currentLang]);

  // Если язык неверный — уже редиректим выше
  if (!currentLang || !SUPPORTED_LANGS.includes(currentLang)) {
    return null;
  }

  // Определяем лендинг по языку
  let LandingComponent = MechOrbitUA;
  if (currentLang === 'ru') LandingComponent = MechOrbitRU;
  if (currentLang === 'en') LandingComponent = MechOrbitEN;

  // Рендерим либо лендинг (если индекс), либо дочерние страницы
  return (
    <>
      {window.location.pathname === `/${currentLang}` ||
      window.location.pathname === `/${currentLang}/` ? (
        <LandingComponent
          isScrolled={isScrolled}
          scrollToSection={scrollToSection}
          currentLang={currentLang}
        />
      ) : (
        <Outlet context={{ currentLang }} /> // ← передаём язык в дочерние страницы
      )}
    </>
  );
}
