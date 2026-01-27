import React from 'react';
import styles from './Hero.module.scss';
import { GoDotFill } from 'react-icons/go';
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import clsx from 'clsx';
import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';
import LangLink from '../../../components/LangLink/LangLink';

const Hero = ({ scrollToSection }) => {
  const heroList = [
    {
      titleBold: 'Клиент',
      title: 'доверие, прозрачность, согласование работ со смартфона',
    },
    { titleBold: 'Механик', title: 'чёткие задачи, фиксация работы, честная оплата' },
    { titleBold: 'Владелец', title: 'контроль процессов, реальная аналитика, прибыль в цифрах' },
  ];

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>OS прибыльного автосервиса</p>
          </div>
          <h1 className={styles.headline}>
            <span className={styles.gradientText}>Три продукта<br /> Одна система</span> <br />
            От заезда автомобиля - до прибыли автосервиса.
          </h1>

          <div className={styles.descriptionBlock}>
            <p className={styles.descriptionTitle}>
              MECH связывает клиента, механика и владельца в единую систему управления автосервисом.
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
              <button className={styles.button}>Начните прямо сейчас - это бесплатно!</button>
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
              Одна экосистема. Полный контроль. Прогнозируемый результат.
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
