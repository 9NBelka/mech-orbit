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
      titleBold: 'Customer',
      title: 'trust, transparency, job approval from a smartphone',
    },
    {
      titleBold: 'Mechanic',
      title: 'clear tasks, work tracking, fair pay',
    },
    {
      titleBold: 'Owner',
      title: 'process control, real analytics, profit in numbers',
    },
  ];

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>OS for a profitable auto service</p>
          </div>
          <h1 className={styles.headline}>
            <span className={styles.gradientText}>Three products. One system</span> <br />
          </h1>

          <p className={clsx(styles.headline, styles.headlineTwo)}>
            From vehicle check-in to auto service profit.
          </p>

          <div className={styles.descriptionBlock}>
            <p className={styles.descriptionTitle}>
              MECH connects the customer, mechanic, and owner into a single auto service management
              system.
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
              <button className={styles.button}>Get started right now — it’s free!</button>
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
              One ecosystem. Full control. Predictable results.
            </p>
          </div>
        </div>
        <div className={styles.visualContent}>
          <img
            src='/images/mech-orbitHeroImage.png'
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
