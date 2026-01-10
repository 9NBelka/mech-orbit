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

    // Очищаем ошибку при вводе
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
          error = "Ім'я обов'язкове";
        } else if (trimmed.length > 20) {
          error = "Ім'я не може бути довшим за 20 символів";
        }
        break;

      case 'phone':
        if (!trimmed) {
          error = 'Телефон обов’язковий';
        } else {
          const digitsOnly = value.replace(/\D/g, '');
          if (digitsOnly.length < 9) {
            error = 'Номер повинен містити мінімум 9 цифр';
          } else if (digitsOnly.length > 12) {
            error = 'Номер не може містити більше 12 цифр';
          }
        }
        break;

      case 'city':
        if (trimmed.length > 50) {
          error = 'Назва міста занадто довга';
        }
        break;

      case 'postsCount':
        if (trimmed && !/^\d+$/.test(trimmed)) {
          error = 'Тільки цифри';
        }
        break;

      case 'ctoFormat':
        if (trimmed && !/^[\d\s%\+()A-Za-zА-ЯҐЄІЇа-яґєії'\-]+$/.test(trimmed)) {
          error = 'Дозволені цифри, літери, %, +, пробіли та дефіс';
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  // Новая функция — правильная валидация всей формы
  const validateForm = () => {
    const newErrors = {};

    // Имя
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "Ім'я обов'язкове";
    } else if (trimmedName.length > 20) {
      newErrors.name = "Ім'я не може бути довшим за 20 символів";
    }

    // Телефон
    const trimmedPhone = formData.phone.trim();
    if (!trimmedPhone) {
      newErrors.phone = 'Телефон обов’язковий';
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 9) {
        newErrors.phone = 'Номер повинен містити мінімум 9 цифр';
      } else if (digitsOnly.length > 12) {
        newErrors.phone = 'Номер не може містити більше 12 цифр';
      }
    }

    // Опциональные поля
    if (formData.city.trim().length > 50) {
      newErrors.city = 'Назва міста занадто довга';
    }
    if (formData.postsCount.trim() && !/^\d+$/.test(formData.postsCount.trim())) {
      newErrors.postsCount = 'Тільки цифри';
    }
    if (
      formData.ctoFormat.trim() &&
      !/^[\d\s%\+()A-Za-zА-ЯҐЄІЇа-яґєії'\-]+$/.test(formData.ctoFormat.trim())
    ) {
      newErrors.ctoFormat = 'Дозволені цифри, літери, %, +, пробіли та дефіс';
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
        alert('Заявку успішно відправлено!');
        setFormData({ name: '', phone: '', city: '', postsCount: '', ctoFormat: '' });
        setTouched({});
        setErrors({});
      } else {
        console.error('Ошибка Telegram:', data);
        alert('Помилка отправки. Спробуйте пізніше.');
      }
    } catch (err) {
      console.error('Ошибка сети:', err);
      alert("Помилка з'єднання. Перевірте інтернет.");
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
            placeholder="Ваше Ім'я *"
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
            placeholder='Місто'
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
            placeholder='Кількість постів'
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
          {isSubmitting ? 'Відправляється...' : 'Відправити заявку'}
        </button>
      </form>
    </div>
  );
}
