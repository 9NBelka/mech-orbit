import { useState } from 'react';
import styles from './Register.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { registerStep1, googleLoginRequest } from '../../api/auth';
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

    formTitle: 'Реєстрація',
    nameLabel: "Ім'я*",
    namePlaceholder: "Ваше ім'я",
    emailLabel: 'Email*',
    emailPlaceholder: 'example@domain.com',
    passwordLabel: 'Пароль*',
    passwordPlaceholder: '••••••••',
    buttonRegister: 'Зареєструватися',
    dividerText: 'Або зареєструйтесь за допомогою',
    googleButton: 'Реєстрація через Google',
    alreadyHaveAccount: 'Вже є акаунт?',
    loginLink: 'Увійти',

    errorRequiredName: "Ім'я обов'язкове",
    errorRequiredEmail: "Email обов'язковий",
    errorInvalidEmail: 'Невірний формат email',
    errorMinPassword: 'Мінімум 6 символів',
    errorRequiredPassword: "Пароль обов'язковий",

    errorRegistrationFailed: 'Помилка реєстрації. Спробуйте ще раз.',
    successMessage: 'Лист з підтвердженням відправлено 📩',
    errorGoogle: 'Помилка авторизації через Google',
  },
  ru: {
    title: 'Регистрация',
    titleSub: 'автосервиса',
    description:
      'CRMmech помогает отслеживать клиентов, персонал и финансы в реальном времени — с видеоаналитикой и искусственным интеллектом',
    businessText: 'Все права защищены.',

    formTitle: 'Регистрация',
    nameLabel: 'Имя*',
    namePlaceholder: 'Ваше имя',
    emailLabel: 'Email*',
    emailPlaceholder: 'example@domain.com',
    passwordLabel: 'Пароль*',
    passwordPlaceholder: '••••••••',
    buttonRegister: 'Зарегистрироваться',
    dividerText: 'Или зарегистрируйтесь с помощью',
    googleButton: 'Регистрация через Google',
    alreadyHaveAccount: 'Уже есть аккаунт?',
    loginLink: 'Войти',

    errorRequiredName: 'Имя обязательно',
    errorRequiredEmail: 'Email обязателен',
    errorInvalidEmail: 'Неверный формат email',
    errorMinPassword: 'Минимум 6 символов',
    errorRequiredPassword: 'Пароль обязателен',

    errorRegistrationFailed: 'Ошибка регистрации. Попробуйте ещё раз.',
    successMessage: 'Письмо с подтверждением отправлено 📩',
    errorGoogle: 'Ошибка авторизации через Google',
  },
  en: {
    title: 'Registration',
    titleSub: 'of car service',
    description:
      'CRMmech helps track customers, staff, and finances in real time — powered by video analytics and artificial intelligence',
    businessText: 'All rights reserved.',

    formTitle: 'Sign Up',
    nameLabel: 'Name*',
    namePlaceholder: 'Your name',
    emailLabel: 'Email*',
    emailPlaceholder: 'example@domain.com',
    passwordLabel: 'Password*',
    passwordPlaceholder: '••••••••',
    buttonRegister: 'Sign Up',
    dividerText: 'Or sign up with',
    googleButton: 'Sign up with Google',
    alreadyHaveAccount: 'Already have an account?',
    loginLink: 'Log in',

    errorRequiredName: 'Name is required',
    errorRequiredEmail: 'Email is required',
    errorInvalidEmail: 'Invalid email format',
    errorMinPassword: 'Minimum 6 characters',
    errorRequiredPassword: 'Password is required',

    errorRegistrationFailed: 'Registration error. Please try again.',
    successMessage: 'Confirmation email sent 📩',
    errorGoogle: 'Google authorization error',
  },
};

export default function Register() {
  const { currentLang } = useOutletContext();
  const translationsText = translations[currentLang] || translations.ua;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      error = value.trim() ? '' : translationsText.errorRequiredName;
    }
    if (name === 'email') {
      if (!value) error = translationsText.errorRequiredEmail;
      else if (!validateEmail(value)) error = translationsText.errorInvalidEmail;
    }
    if (name === 'password') {
      if (!value) error = translationsText.errorRequiredPassword;
      else if (value.length < 6) error = translationsText.errorMinPassword;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const passwordError = validateField('password', formData.password);

    if (nameError || emailError || passwordError) return;

    try {
      await registerStep1({
        email: formData.email,
        password: formData.password,
        language: currentLang === 'en' ? 'en' : currentLang === 'ru' ? 'ru' : 'uk',
      });

      alert(translationsText.successMessage);
      // navigate('/check-email'); // раскомментируй, если есть такая страница
    } catch (err) {
      console.error(err);
      setErrors({
        email: translationsText.errorRegistrationFailed,
      });
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email &&
    validateEmail(formData.email) &&
    formData.password.length >= 6 &&
    !Object.values(errors).some((err) => err !== '');

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
          alert(translationsText.errorGoogle);
        }
      },
    });

    google.accounts.id.prompt();
  };

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
          <h2 className={styles.formTitle}>{translationsText.formTitle}</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>{translationsText.nameLabel}</label>
              <div className={styles.inputWrapper}>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={translationsText.namePlaceholder}
                  className={clsx(styles.input, errors.name && touched.name && styles.errorInput)}
                  required
                />
              </div>
              {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>{translationsText.emailLabel}</label>
              <div className={styles.inputWrapper}>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={translationsText.emailPlaceholder}
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
                  placeholder={translationsText.passwordPlaceholder}
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
              {translationsText.buttonRegister}
            </button>
          </form>

          <div className={styles.divider}>
            <span>{translationsText.dividerText}</span>
          </div>

          <button type='button' onClick={handleGoogleLogin} className={styles.googleBtn}>
            <img src='https://www.google.com/favicon.ico' alt='Google' width='20' />
            {translationsText.googleButton}
          </button>

          <p className={styles.signup}>
            {translationsText.alreadyHaveAccount}{' '}
            <LangLink to='/login' className={styles.signupLink}>
              {translationsText.loginLink}
            </LangLink>
          </p>
        </div>
      </div>
    </div>
  );
}
