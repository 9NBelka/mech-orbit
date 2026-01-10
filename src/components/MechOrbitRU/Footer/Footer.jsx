import React from 'react';
// import { Mail, Phone, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';
import styles from './Footer.module.scss';
import {
  BsChat,
  BsEnvelope,
  BsFacebook,
  BsGeoAlt,
  BsInstagram,
  BsTelegram,
  BsTelephone,
  BsTwitter,
} from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer({ onFooterAndHeaderTextLinksMain }) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.borderLine}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandSection}>
            <div className={styles.logoAndAnotherTextBlock}>
              <div className={styles.logo}>MECHORBIT</div>
              <p className={styles.slogan}>#Taking back control</p>
              <p className={styles.description}>Операційна система для автосервісів</p>
            </div>
            <a className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Запросити демо
            </a>
          </div>

          <div className={styles.linksAndServicesBlock}>
            <div className={styles.linksSection}>
              <h4>Навігація</h4>
              <ul>
                {onFooterAndHeaderTextLinksMain.map((info, idx) => (
                  <li key={idx}>
                    <a
                      onClick={() => scrollToSection(info.linkToPage)}
                      className={styles.navigationLinks}>
                      {info.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.servicesSection}>
              <h4>MECH Orbit</h4>
              <ul>
                <li>
                  <a href='/CRMmech'>CRMmech</a>
                </li>
                <li>
                  <a href='/MechVin'>MechVin</a>
                </li>
                <li>
                  <a href='/BookVin'>BookVin</a>
                </li>
              </ul>
            </div>

            <div className={styles.servicesSection}>
              <h4>MECH Partners</h4>
              <ul>
                <li>
                  <a href='/CRMmech'>Постачальники</a>
                </li>
                <li>
                  <a href='/MechVin' className={styles.linkOff}>
                    Реселлери
                  </a>
                </li>
                <li>
                  <a href='/AIMech' className={styles.linkOff}>
                    Інтегратори
                  </a>
                </li>
                <li>
                  <a href='/AIMech' className={styles.linkOff}>
                    Франчайзі
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.servicesSection}>
              <h4>MECH Capital</h4>
              <ul>
                <li>
                  <a href='/CRMmech'>Інвестору</a>
                </li>
                <li>
                  <a href='/MechVin' className={styles.linkOff}>
                    Автосервісам
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.contactSection}>
              <h4>Контакти</h4>
              <div className={styles.contactList}>
                <a href='mailto:hello@mechorbit.com' className={styles.contactLink} target='_blank'>
                  <BsEnvelope className={styles.footerContactIcon} />
                  hello@mechorbit.com
                </a>
                <a href='#' className={styles.contactLink} target='_blank'>
                  <BsTelephone className={styles.footerContactIcon} />
                  +380 (12) 345-67-89
                </a>
                <a className={styles.contactLink} target='_blank'>
                  <BsGeoAlt className={styles.footerContactIcon} />
                  Україна / Естонія
                </a>
              </div>
              <div className={styles.social}>
                <h5>Соціальні мережі</h5>
                <div className={styles.socialLinks}>
                  <a href='#' aria-label='Facebook' target='_blank'>
                    <BsFacebook className={styles.footerSocialIcon} />
                  </a>
                  <a href='#' aria-label='Telegram' target='_blank'>
                    <BsTelegram className={styles.footerSocialIcon} />
                  </a>
                  <a href='#' aria-label='Instagram' target='_blank'>
                    <BsInstagram className={styles.footerSocialIcon} />
                  </a>
                  {/* <a href='#' aria-label='Instagram' target='_blank'>
                    <BsTwitter />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} MECHORBIT. Всі права захищені.</p>
          </div>

          <div className={styles.socialsTags}>
            <a target='_blank'>Socials: @mechorbit • @mech_orbit • @mechorbit_ai</a>
          </div>
        </div>
        <div className={styles.legal}>
          <a href='/privacy-policy' target='_blank' rel='noopener noreferrer'>
            Політика конфіденційності
          </a>
          <a href='/documents/terms-of-use.pdf' download='Умови_використання.pdf'>
            Умови використання
          </a>
          <a href='/documents/offer-agreement.pdf' download='Договір_оферти.pdf'>
            Договір оферти
          </a>
        </div>
      </div>
    </footer>
  );
}
