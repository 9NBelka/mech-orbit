import { useState } from 'react';
import styles from './Login.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { loginRequest } from '../../api/auth';
import { googleLoginRequest } from '../../api/auth';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useOutletContext } from 'react-router-dom';
import LangLink from '../../components/LangLink/LangLink';

const translations = {
  ua: {
    title: 'Реєстрація',
    titleSub: 'автосервісу',
    description:
      'CRMmech допомагає відстежувати клієнтів, персонал та фінанси в реальному часі — з відеоаналітикою та штучним інтелектом',
    businessText: 'Всі права захищені.',

    titleForm: 'Вхід',
    emailLabel: 'Email',
    passwordLabel: 'Пароль',
    buttonLogin: 'Увійти',
    anotherLoginText: 'Або увійдіть за допомогою',
    buttonLoginGogle: 'Вхід через Google',

    noAccountText: 'Немає акаунта?',
    registerLink: 'Зареєструватися',

    errorInvalidEmail: 'Невірний email',
    errorRequiredEmail: "Email обов'язковий",
    errorMinPassword: 'Мін. 6 символів',
    errorRequiredPassword: "Пароль обов'язковий",
    errorLoginFailed: 'Невірний email або пароль',
    errorLoginFailedGoogle: 'Помилка авторизації через Google',
  },
  ru: {
    title: 'Регистрация',
    titleSub: 'автосервиса',
    description:
      'CRMmech помогает отслеживать клиентов, персонал и финансы в реальном времени — с видеоаналитикой и искусственным интеллектом',
    businessText: 'Все права защищены.',

    titleForm: 'Вход',
    emailLabel: 'Email',
    passwordLabel: 'Пароль',
    buttonLogin: 'Войти',
    anotherLoginText: 'Или войдите с помощью',
    buttonLoginGogle: 'Вход через Google',

    noAccountText: 'Нет аккаунта?',
    registerLink: 'Зарегистрироваться',

    errorInvalidEmail: 'Неверный email',
    errorRequiredEmail: 'Email обязателен',
    errorMinPassword: 'Мин. 6 символов',
    errorRequiredPassword: 'Пароль обязателен',
    errorLoginFailed: 'Неверный email или пароль',
    errorLoginFailedGoogle: 'Ошибка авторизации через Google',
  },
  en: {
    title: 'Car Service',
    titleSub: 'Registration',
    description:
      'CRMmech helps track customers, staff, and finances in real time — powered by video analytics and artificial intelligence',
    businessText: 'All rights reserved.',

    titleForm: 'Login',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    buttonLogin: 'Sign in',
    anotherLoginText: 'Or sign in with',
    buttonLoginGogle: 'Sign in with Google',

    noAccountText: 'Don’t have an account?',
    registerLink: 'Sign up',

    errorInvalidEmail: 'Invalid email',
    errorRequiredEmail: 'Email is required',
    errorMinPassword: 'Min. 6 characters',
    errorRequiredPassword: 'Password is required',
    errorLoginFailed: 'Incorrect email or password',
    errorLoginFailedGoogle: 'Google authorization error',
  },
};

export default function Login() {
  const { currentLang } = useOutletContext();
  const translationsText = translations[currentLang] || translations.ua;

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
          newErrors.email = value
            ? validateEmail(value)
              ? ''
              : translationsText.errorInvalidEmail
            : '';
        }
        if (name === 'password') {
          newErrors.password = value
            ? value.length < 6
              ? translationsText.errorMinPassword
              : ''
            : '';
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
        email: value
          ? validateEmail(value)
            ? ''
            : translationsText.errorInvalidEmail
          : translationsText.errorRequiredEmail,
      }));
    }
    if (name === 'password') {
      setErrors((prev) => ({
        ...prev,
        password: value
          ? value.length < 6
            ? translationsText.errorMinPassword
            : ''
          : translationsText.errorRequiredPassword,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = translationsText.errorInvalidEmail;
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = translationsText.errorMinPassword;
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
        email: translationsText.errorLoginFailed,
        password: translationsText.errorLoginFailed,
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
          alert(translationsText.errorLoginFailedGoogle);
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
            {translationsText.title}{' '}
            <span className={styles.highlight}>{translationsText.titleSub}</span>
          </h1>

          <div className={styles.screenshotWrapper}>
            <img
              src='/images/mech-orbit-screen-dashboard.webp'
              alt='CRMmech інтерфейс'
              className={styles.screenshot}
            />
          </div>

          <p className={styles.description}>{translationsText.description}</p>

          <footer className={styles.footer}>
            &copy; {currentYear} {translationsText.businessText}
          </footer>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>{translationsText.titleForm}</h2>
          {/* <p className={styles.welcome}>Welcome to Assist CONTROL</p> */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>{translationsText.emailLabel}</label>
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
              <label className={styles.label}>{translationsText.passwordLabel}</label>
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
              {translationsText.buttonLogin}
            </button>
          </form>
          <div className={styles.divider}>
            <span>{translationsText.anotherLoginText}</span>
          </div>
          <button type='button' onClick={handleGoogleLogin} className={styles.googleBtn}>
            <img src='https://www.google.com/favicon.ico' alt='Google' />
            {translationsText.buttonLoginGogle}
          </button>
          <p className={styles.signup}>
            {translationsText.noAccountText}{' '}
            <LangLink to={'/register'} className={styles.signupLink}>
              {translationsText.registerLink}
            </LangLink>
          </p>
        </div>
      </div>
    </div>
  );
}
