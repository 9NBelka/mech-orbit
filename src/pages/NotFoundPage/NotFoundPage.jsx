import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import { useOutletContext } from 'react-router-dom';

const translations = {
  ua: {
    title: 'Сторінку не знайдено',
    subtitle: '404',
    buttonText: 'На головну',
  },
  ru: {
    title: 'Страница не найдена',
    subtitle: '404',
    buttonText: 'На главную',
  },
  en: {
    title: 'Page not found',
    subtitle: '404',
    buttonText: 'Back to home',
  },
};

export default function NotFoundPage() {
  const { currentLang } = useOutletContext();
  const translationsText = translations[currentLang] || translations.en;

  return (
    <div className={styles.notFoundPage}>
      <h1>{translationsText.subtitle}</h1>
      <h2>{translationsText.title}</h2>

      <Link to='/' className={styles.buttonLink}>
        <p>{translationsText.buttonText}</p>
      </Link>
    </div>
  );
}
