import { useState } from 'react';
import styles from './InvoiceModal.module.scss';
import { BsX } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

export default function InvoiceModal({ isOpen, onClose, totalCost = 0 }) {
  const [formData, setFormData] = useState({
    companyName: '',
    ipn: '',
    address: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
    } else {
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 9) {
        newErrors.phone = 'Номер должен содержать минимум 9 цифр';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const serviceID = 'service_5wff385';
    const templateID = 'template_w82ssye';
    const userID = 'Mdbffxf-pXEUvjky3';

    // Форматируем цену красиво
    const formattedPrice = totalCost.toLocaleString('uk-UA', {
      style: 'currency',
      currency: 'UAH',
    });

    const templateParams = {
      companyName: formData.companyName || 'Не указано',
      ipn: formData.ipn || 'Не указано',
      address: formData.address || 'Не указано',
      email: formData.email,
      phone: formData.phone,
      totalCost: formattedPrice, // ← Добавляем сумму!
      rawTotalCost: totalCost, // ← Можно и числом, если нужно
      reply_to: formData.email,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);

      alert('Счет успешно отправлен на belka.nik02@gmail.com!');
      onClose();
      setFormData({
        companyName: '',
        ipn: '',
        address: '',
        email: '',
        phone: '',
      });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Ошибка отправки. Попытайтесь еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePayCard = () => {
    alert('Переход к оплате картой... (здесь будет интеграция с LiqPay/Fondy и т.д.)');
    onClose();
  };

  if (!isOpen) return null;

  const isFormValid =
    formData.email.trim() && formData.phone.trim() && !errors.email && !errors.phone;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <BsX className={styles.modalCloseIcon} onClick={onClose} />

        <h2 className={styles.title}>Введите реквизиты для формирования счета</h2>

        <form className={styles.form} onSubmit={handleSubmitEmail}>
          <div className={styles.field}>
            <input
              type='text'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              placeholder='Название компании'
            />
          </div>

          <div className={styles.field}>
            <input
              type='text'
              name='ipn'
              value={formData.ipn}
              onChange={handleChange}
              placeholder='ИНН / ЕГРПОУ'
            />
          </div>

          <div className={styles.field}>
            <input
              type='text'
              name='address'
              value={formData.address}
              onChange={handleChange}
              placeholder='Адрес'
            />
          </div>

          <div className={styles.field}>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email *'
              className={errors.email ? styles.errorInput : ''}
              required
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Телефон *'
              className={errors.phone ? styles.errorInput : ''}
              required
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>

          <button type='submit' className={styles.btnEmail} disabled={isSubmitting || !isFormValid}>
            {isSubmitting ? 'Отправляется...' : 'Отправить счет на email'}
          </button>
        </form>

        <button onClick={handlePayCard} className={styles.btnCard}>
          Оплатить картой
        </button>
      </div>
    </div>
  );
}
