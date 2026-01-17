import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <h2>Not Found Page</h2>
      <Link to='/' className={styles.buttonLink}>
        <p>на главную</p>
      </Link>
    </div>
  );
}
