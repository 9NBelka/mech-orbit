import { useState } from 'react';
import styles from './Login.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { loginRequest } from '../../api/auth';
import { googleLoginRequest } from '../../api/auth';
import { BsArrowLeftShort } from 'react-icons/bs';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const currentYear = new Date().getFullYear();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (name === 'email') {
          newErrors.email = value ? (validateEmail(value) ? '' : 'Невірний email') : '';
        }
        if (name === 'password') {
          newErrors.password = value ? (value.length < 6 ? 'Мін. 6 символів' : '') : '';
        }
        return newErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === 'email') {
      setErrors((prev) => ({
        ...prev,
        email: value ? (validateEmail(value) ? '' : 'Невірний email') : "Email обов'язковий",
      }));
    }
    if (name === 'password') {
      setErrors((prev) => ({
        ...prev,
        password: value ? (value.length < 6 ? 'Мін. 6 символів' : '') : "Пароль обов'язковий",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Невірний email';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Мін. 6 символів';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const data = await loginRequest(formData.email, formData.password);

      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);

      // alert('Успішний вхід 🚀');
      navigate('https://app.crmmech.com/video-control');
    } catch (err) {
      console.error(err);

      setErrors({
        email: 'Невірний email або пароль',
        password: 'Невірний email або пароль',
      });
    }
  };

  const isFormValid = !errors.email && !errors.password && formData.email && formData.password;

  const handleGoogleLogin = () => {
    /* global google */

    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        try {
          if (!response?.credential) {
            throw new Error('Google credential not found');
          }

          const data = await googleLoginRequest({
            token: response.credential,
          });

          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);

          navigate('https://app.crmmech.com/video-control');
        } catch (error) {
          console.error('Google login error:', error);
          alert('Помилка авторизації через Google');
        }
      },
    });

    google.accounts.id.prompt();
  };

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <p className={styles.backText} onClick={() => navigate('/')}>
          <BsArrowLeftShort className={styles.icon} />
          back
        </p>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Реєстрація <span className={styles.highlight}>автосервісу</span>
          </h1>

          <div className={styles.screenshotWrapper}>
            <img
              src='images/mech-orbit-screen-dashboard.webp'
              alt='CRMmech інтерфейс'
              className={styles.screenshot}
            />
          </div>

          <p className={styles.description}>
            CRMmech допомагає відстежувати клієнтів, персонал та фінанси в реальному часі — з
            відеоаналітикою та штучним інтелектом
          </p>

          <footer className={styles.footer}>
            &copy; {currentYear} CRMmech. Всі права захищені.
          </footer>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Вхід</h2>
          {/* <p className={styles.welcome}>Welcome to Assist CONTROL</p> */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputWrapper}>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='example@domain.com'
                  className={clsx(styles.input, errors.email && touched.email && styles.errorInput)}
                  required
                />
              </div>
              {errors.email && touched.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Пароль</label>
              <div className={styles.inputWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='••••••••'
                  className={clsx(
                    styles.input,
                    errors.password && touched.password && styles.errorInput,
                  )}
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.eyeBtn}>
                  {showPassword ? (
                    <FaEye className={styles.passwordIcon} />
                  ) : (
                    <FaEyeSlash className={styles.passwordIcon} />
                  )}
                </button>
              </div>
              {errors.password && touched.password && (
                <span className={styles.error}>{errors.password}</span>
              )}
            </div>

            <button
              type='submit'
              className={clsx(styles.submitBtn, !isFormValid && styles.disabledBtn)} // Додаємо disabled стиль
              disabled={!isFormValid}>
              Увійти
            </button>
          </form>
          <div className={styles.divider}>
            <span>Або увійдіть за допомогою</span>
          </div>
          <button type='button' onClick={handleGoogleLogin} className={styles.googleBtn}>
            <img src='https://www.google.com/favicon.ico' alt='Google' />
            Sign in with Google
          </button>
          <p className={styles.signup}>
            Немає акаунта?{' '}
            <Link to={'/register'} className={styles.signupLink}>
              Зареєструватися
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
