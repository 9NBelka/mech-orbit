import { useState } from 'react';
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './LangSwitcher.module.scss';

export default function LangSwitcher({ currentLang, langSwitcher }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: 'ua', label: 'Українська', short: 'UA' },
    { code: 'ru', label: 'Русский', short: 'RU' },
    { code: 'en', label: 'English', short: 'EN' },
  ];

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  const changeLanguage = (langCode) => {
    let newPath = location.pathname.replace(/^\/(ua|ru|en)\b/, '');
    newPath = `/${langCode}${newPath || ''}`;
    navigate(newPath, { replace: true });
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(styles.langSwitcher, langSwitcher && styles.langSwitcherPhone)}
      onMouseLeave={() => setIsOpen(false)}>
      <button
        className={clsx(styles.langCurrent, isOpen && styles.active)}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-haspopup='true'>
        <span className={styles.currentShort}>{current.short}</span>
        {/* <span className={styles.currentLabel}>{current.label}</span> */}
        <span className={clsx(styles.arrow, isOpen && styles.arrowUp)}>▼</span>
      </button>

      {isOpen && (
        <ul className={styles.langDropdown}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={clsx(styles.langItem, lang.code === currentLang && styles.selected)}
                onClick={() => changeLanguage(lang.code)}>
                <span className={styles.langShort}>{lang.short}</span>
                {/* <span className={styles.langFull}>{lang.label}</span> */}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
