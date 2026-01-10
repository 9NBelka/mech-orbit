import React from 'react';
import styles from './Hero.module.scss';
import { GoDotFill } from 'react-icons/go';
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import clsx from 'clsx';
import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Hero = ({ scrollToSection }) => {
  const heroList = [
    {
      title: 'Видеонаблюдение с контролем времени простоя на основе ИИ',
    },
    {
      title: 'Планирование работы и мониторинг загрузки коробок',
    },
    {
      title: 'Одобрение работы на смартфоне клиента',
    },
    {
      title: 'Интеграции с поставщиками и платежами',
    },
    {
      title: 'Аналитика прибыльности в один клик',
    },
  ];

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>Pre-seed Round Open</p>
          </div>
          <h1 className={styles.headline}>
            <span className={styles.gradientText}>Операционная система</span> <br />
            для прибыльного автосервиса
          </h1>

          <div className={styles.descriptionBlock}>
            {heroList.map((textList, index) => (
              <div key={index} className={styles.descriptionAndIconBlock}>
                <IoMdCheckmark className={styles.checkmarkIcon} />
                <p className={styles.description}>{textList.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <Link to='/register' target='_blank'>
              <button className={styles.button}>Подключить</button>
            </Link>
            <button
              onClick={() => scrollToSection('contacts')}
              className={clsx(styles.button, styles.buttonTwo)}>
              Тест
              <BsArrowRightShort className={styles.buttonIconTwo} />
            </button>
          </div>
          <div className={styles.note}>
            Единая система, в которой работа, люди, видеонаблюдение, запасные части, платежи и
            клиенты связаны между собой. От камеры до кассового аппарата — все процессы
            функционируют вокруг единого ядра, без перерывов и хаоса. Владелец видит прибыль. Техник
            имеет четкий план. Клиент получает прозрачность и скорость.
          </div>
        </div>
        <div className={styles.visualContent}>
          <img
            src='images/mech-orbitHeroImage.webp'
            className={styles.backgroundImage}
            alt='orbitHeroImage'
          />
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.pinkPrint)}></div>
    </section>
  );
};

export default Hero;
