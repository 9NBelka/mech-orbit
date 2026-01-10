import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import mechLogo from '../../../../public/mech-orbitLogo.svg';
import { FiMenu, FiX } from 'react-icons/fi';
import Navigation from './Navigation/Navigation';

const Header = ({ isScrolled, scrollToSection, onFooterAndHeaderTextLinksMain }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleScroll = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoBlock}>
          {/* <div className={styles.logoContainer}>
            <img src={mechLogo} alt='Logo' className={styles.iconLogo} />
          </div>
          <div className={styles.logo} onClick={() => handleScroll('hero')}>
            MECH.CAPITAL
          </div> */}
          <div className={styles.logoContainer}>
            <img src={mechLogo} alt='Logo' className={styles.iconLogo} />
          </div>
        </div>

        <Navigation
          handleScroll={handleScroll}
          onFooterAndHeaderTextLinksMain={onFooterAndHeaderTextLinksMain}
        />

        {menuOpen ? (
          <button className={styles.burger} onClick={() => setMenuOpen(false)}>
            <FiX className={styles.burgerIcon} />
          </button>
        ) : (
          <button className={styles.burger} onClick={() => setMenuOpen(true)}>
            <FiMenu className={styles.burgerIcon} />
          </button>
        )}
      </div>

      {/* mobile menu */}
      <div className={`${styles.mobileWrapper} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenu} ref={menuRef}>
          <Navigation
            handleScroll={handleScroll}
            tablet={true}
            onFooterAndHeaderTextLinksMain={onFooterAndHeaderTextLinksMain}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
