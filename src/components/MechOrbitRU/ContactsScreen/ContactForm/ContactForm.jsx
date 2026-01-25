import { useState } from 'react';
import styles from './ContactForm.module.scss';
import planeIcon from '../../../../../public/sendIcon.svg';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    postsCount: '',
    ctoFormat: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'phone') {
      const filtered = value.replace(/[^+\d\s()-]/g, '');
      const digitsOnly = filtered.replace(/\D/g, '');
      if (digitsOnly.length > 12) {
        let digitCount = 0;
        let cutIndex = 0;
        for (let i = 0; i < filtered.length; i++) {
          if (/\d/.test(filtered[i])) {
            digitCount++;
            if (digitCount > 12) {
              cutIndex = i;
              break;
            }
          }
        }
        newValue = filtered.slice(0, cutIndex);
      } else {
        newValue = filtered;
      }
    }

    if (name === 'name') {
      const filteredName = value.replace(/[^A-Za-zА-ЯҐЄІЇа-яґєії'\-\s]/g, '');
      const trimmed = filteredName.trim();
      if (trimmed.length > 20) {
        let charCount = 0;
        let cutIndex = 0;
        for (let i = 0; i < filteredName.length; i++) {
          if (filteredName[i] !== ' ' || trimmed.charAt(charCount) === ' ') {
            charCount++;
            if (charCount > 20) {
              cutIndex = i;
              break;
            }
          }
        }
        newValue = filteredName.slice(0, cutIndex);
      } else {
        newValue = filteredName;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let error = '';
    const trimmed = value.trim();

    switch (fieldName) {
      case 'name':
        if (!trimmed) {
          error = 'Имя обязательно';
        } else if (trimmed.length > 20) {
          error = 'Имя не может быть длиннее 20 символов';
        }
        break;

      case 'phone':
        if (!trimmed) {
          error = 'Телефон обязателен';
        } else {
          const digitsOnly = value.replace(/\D/g, '');
          if (digitsOnly.length < 9) {
            error = 'Номер должен содержать минимум 9 цифр';
          } else if (digitsOnly.length > 12) {
            error = 'Номер не может содержать более 12 цифр';
          }
        }
        break;

      case 'city':
        if (trimmed.length > 50) {
          error = 'Название города слишком длинное';
        }
        break;

      case 'postsCount':
        if (trimmed && !/^\d+$/.test(trimmed)) {
          error = 'Только цифры';
        }
        break;

      case 'ctoFormat':
        if (trimmed && !/^[\d\s%\+()A-Za-zА-ЯҐЄІЇа-яґєії'\-]+$/.test(trimmed)) {
          error = 'Разрешенные цифры, буквы, %, +, пробелы и дефис';
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Имя обязательно';
    } else if (trimmedName.length > 20) {
      newErrors.name = 'Имя не может быть длиннее 20 символов';
    }

    // Телефон
    const trimmedPhone = formData.phone.trim();
    if (!trimmedPhone) {
      newErrors.phone = 'Телефон обязателен';
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 9) {
        newErrors.phone = 'Номер должен содержать минимум 9 цифр';
      } else if (digitsOnly.length > 12) {
        newErrors.phone = 'Номер не может содержать более 12 цифр';
      }
    }

    // Опциональные поля
    if (formData.city.trim().length > 50) {
      newErrors.city = 'Название города слишком длинное';
    }
    if (formData.postsCount.trim() && !/^\d+$/.test(formData.postsCount.trim())) {
      newErrors.postsCount = 'Только цифры';
    }
    if (
      formData.ctoFormat.trim() &&
      !/^[\d\s%\+()A-Za-zА-ЯҐЄІЇа-яґєії'\-]+$/.test(formData.ctoFormat.trim())
    ) {
      newErrors.ctoFormat = 'Разрешенные цифры, буквы, %, +, пробелы и дефис';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 || (!newErrors.name && !newErrors.phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Показываем все ошибки
    setTouched({
      name: true,
      phone: true,
      city: true,
      postsCount: true,
      ctoFormat: true,
    });

    // Если обязательные поля не прошли — не отправляем
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const message = `
Нова заявка з форми! 🚀

👤 Ім'я: ${formData.name.trim() || '❌'}
📞 Телефон: ${formData.phone.trim() || '❌'}
🌆 Місто: ${formData.city.trim() || '❌'}
📊 Кількість постів: ${formData.postsCount.trim() || '❌'}
🔧 Формат СТО: ${formData.ctoFormat.trim() || '❌'}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      const data = await response.json();

      if (data.ok) {
        alert('Заявка успешно отправлена!');
        setFormData({ name: '', phone: '', city: '', postsCount: '', ctoFormat: '' });
        setTouched({});
        setErrors({});
      } else {
        console.error('Ошибка Telegram:', data);
        alert('Ошибка отправки. Попытайтесь позже.');
      }
    } catch (err) {
      console.error('Ошибка сети:', err);
      alert('Ошибка соединения. Проверьте Интернет.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Проверка на валидность обязательных полей для отключения кнопки
  const isFormValid = formData.name.trim() !== '' && formData.phone.trim() !== '';

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Ваше Имя *'
            className={errors.name && touched.name ? styles.errorInput : ''}
          />
          {/* {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>} */}
        </div>

        <div className={styles.field}>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Телефон *'
            className={errors.phone && touched.phone ? styles.errorInput : ''}
          />
          {/* {errors.phone && touched.phone && <span className={styles.error}>{errors.phone}</span>} */}
        </div>

        <div className={styles.field}>
          <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Город'
            className={errors.city && touched.city ? styles.errorInput : ''}
          />
          {/* {errors.city && touched.city && <span className={styles.error}>{errors.city}</span>} */}
        </div>

        <div className={styles.field}>
          <input
            type='text'
            name='postsCount'
            value={formData.postsCount}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Количество постов'
            className={errors.postsCount && touched.postsCount ? styles.errorInput : ''}
          />
          {/* {errors.postsCount && touched.postsCount && (
            <span className={styles.error}>{errors.postsCount}</span>
          )} */}
        </div>

        <div className={styles.field}>
          <input
            type='text'
            name='ctoFormat'
            value={formData.ctoFormat}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Формат СТО'
            className={errors.ctoFormat && touched.ctoFormat ? styles.errorInput : ''}
          />
          {/* {errors.ctoFormat && touched.ctoFormat && (
            <span className={styles.error}>{errors.ctoFormat}</span>
          )} */}
        </div>

        <button type='submit' className={styles.submitBtn} disabled={isSubmitting || !isFormValid}>
          <img src={planeIcon} alt='' className={styles.planeIcon} />
          {isSubmitting ? 'Отправляется...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  );
}
