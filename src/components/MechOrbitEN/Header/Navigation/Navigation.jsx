import clsx from 'clsx';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

export default function Navigation({
  handleScroll,
  tablet,
  onFooterAndHeaderTextLinksMain,
  currentLang,
  langSwitcher,
}) {
  return (
    <nav className={clsx(styles.nav, tablet && styles.navMobile)}>
      {onFooterAndHeaderTextLinksMain.map((info, index) => (
        <a key={index} onClick={() => handleScroll(info.linkToPage)} className={styles.navLink}>
          {info.title}
        </a>
      ))}
      {/* <button className={styles.buttonInvest} onClick={() => handleScroll('contacts')}>
        Invest Now
      </button> */}
      <LangSwitcher currentLang={currentLang} langSwitcher={langSwitcher} />
      <Link to='https://mech.capital' target='_blank' className={styles.buttonInvestLink}>
        <button className={styles.buttonInvest}>Invest</button>
      </Link>
    </nav>
  );
}
