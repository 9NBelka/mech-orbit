import clsx from 'clsx';
import styles from './Navigation.module.scss';

export default function Navigation({ handleScroll, tablet, onFooterAndHeaderTextLinksMain }) {
  return (
    <nav className={clsx(styles.nav, tablet && styles.navMobile)}>
      {onFooterAndHeaderTextLinksMain.map((info, index) => (
        <a key={index} onClick={() => handleScroll(info.linkToPage)} className={styles.navLink}>
          {info.title}
        </a>
      ))}
      <button className={styles.buttonInvest} onClick={() => handleScroll('contacts')}>
        Invest Now
      </button>
    </nav>
  );
}
