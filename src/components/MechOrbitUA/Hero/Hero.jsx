import React from 'react';
import styles from './Hero.module.scss';
import { GoDotFill } from 'react-icons/go';
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import clsx from 'clsx';
import { IoMdCheckmark } from 'react-icons/io';
import LangLink from '../../../components/LangLink/LangLink';

const Hero = ({ scrollToSection }) => {
  const heroList = [
    {
      titleBold: 'Клієнт',
      title: 'довіра, прозорість, погодження робіт зі смартфона',
    },
    { titleBold: 'Механік', title: 'чіткі завдання, фіксація робіт, чесна оплата' },
    { titleBold: 'Власник', title: 'контроль процесів, реальна аналітика, прибуток у цифрах' },
  ];

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>OS прибуткового автосервісу</p>
          </div>
          <h1 className={styles.headline}>
            <span className={styles.gradientText}>Три продукти. Одна система</span> <br />
            Від заїзду автомобіля - до прибутку автосервісу.
          </h1>

          <div className={styles.descriptionBlock}>
            <p className={styles.descriptionTitle}>
              MECH поєднує клієнта, механіка та власника в єдину систему управління автосервісом.
            </p>

            {heroList.map((textList, index) => (
              <div key={index} className={styles.descriptionAndIconBlock}>
                <IoMdCheckmark className={styles.checkmarkIcon} />

                <p className={styles.description}>
                  <span>{textList.titleBold}</span> — {textList.title}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <LangLink to='/register' target='_blank'>
              <button className={styles.button}>Почніть просто зараз — це безкоштовно!</button>
            </LangLink>

            {/* <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Подключить
            </button> */}

            {/* <button
              onClick={() => scrollToSection('contacts')}
              className={clsx(styles.button, styles.buttonTwo)}>
              Тест
              <BsArrowRightShort className={styles.buttonIconTwo} />
            </button> */}
          </div>
          <div className={styles.note}>
            {/* Единая система, в которой работа, люди, видеонаблюдение, запасные части, платежи и
            клиенты связаны между собой. От камеры до кассового аппарата — все процессы
            функционируют вокруг единого ядра, без перерывов и хаоса. Владелец видит прибыль. Техник
            имеет четкий план. Клиент получает прозрачность и скорость. */}
            <p className={styles.subDescription}>
              Одна екосистема. Повний контроль. Прогнозований результат.
            </p>
          </div>
        </div>
        <div className={styles.visualContent}>
          <img
            src='images/mech-orbitHeroImage.png'
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
