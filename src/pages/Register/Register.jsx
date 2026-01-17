import { useState } from 'react';
import styles from './Register.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx'; // Не забудь встановити: npm i clsx
import { registerStep1, googleLoginRequest } from '../../api/auth';
import { BsArrowLeftShort } from 'react-icons/bs';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
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
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      error = value.trim() ? '' : "Ім'я обов'язкове";
    }
    if (name === 'email') {
      if (!value) error = "Email обов'язковий";
      else if (!validateEmail(value)) error = 'Невірний формат email';
    }
    if (name === 'password') {
      if (!value) error = "Пароль обов'язковий";
      else if (value.length < 6) error = 'Мінімум 6 символів';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateField('email', formData.email);
    validateField('password', formData.password);

    if (!validateEmail(formData.email) || formData.password.length < 6) return;

    try {
      const res = await registerStep1({
        email: formData.email,
        password: formData.password,
        language: 'uk',
      });

      alert('Лист з підтвердженням відправлено 📩');
      // navigate('/check-email');
    } catch (err) {
      console.error(err);
      setErrors({
        email: 'Помилка реєстрації',
      });
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email &&
    validateEmail(formData.email) &&
    formData.password.length >= 6 &&
    !Object.values(errors).some((err) => err);

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
          <h2 className={styles.formTitle}>Реєстрація</h2>
          {/* <p className={styles.welcome}>Welcome to Assist CONTROL</p> */}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Ім'я*</label>
              <div className={styles.inputWrapper}>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ваше ім'я"
                  className={clsx(styles.input, errors.name && touched.name && styles.errorInput)}
                  required
                />
              </div>
              {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            {/* Поле Email — НОВЕ! */}
            <div className={styles.field}>
              <label className={styles.label}>Email*</label>
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

            {/* Поле Пароль */}
            <div className={styles.field}>
              <label className={styles.label}>Пароль*</label>
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
              disabled={!isFormValid}
              className={clsx(styles.submitBtn, !isFormValid && styles.disabledBtn)}>
              Зареєструватися
            </button>
          </form>

          <div className={styles.divider}>
            <span>Або зареєструйтесь за допомогою</span>
          </div>

          <button type='button' onClick={handleGoogleLogin} className={styles.googleBtn}>
            <img src='https://www.google.com/favicon.ico' alt='Google' width='20' />
            Sign up with Google
          </button>

          <p className={styles.signup}>
            Вже є акаунт?{' '}
            <Link to={'/login'} className={styles.signupLink}>
              Увійти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
