import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { completeRegistration } from '../../../api/auth';
import styles from './CompleteRegistration.module.scss';
import clsx from 'clsx';

export default function CompleteRegistration() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token');

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    city: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const data = await completeRegistration({
        token,
        ...formData,
      });

      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);

      alert('Реєстрацію завершено 🚀');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setErrors({ form: 'Помилка завершення реєстрації' });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Завершення реєстрації</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name='first_name'
          placeholder='Імʼя'
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <input
          name='last_name'
          placeholder='Прізвище'
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <input name='phone' placeholder='Телефон' value={formData.phone} onChange={handleChange} />

        <input name='city' placeholder='Місто' value={formData.city} onChange={handleChange} />

        <input
          name='address'
          placeholder='Адреса'
          value={formData.address}
          onChange={handleChange}
        />

        {errors.form && <p className={styles.error}>{errors.form}</p>}

        <button type='submit' className={styles.submitBtn}>
          Завершити реєстрацію
        </button>
      </form>
    </div>
  );
}
