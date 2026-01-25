import React from 'react';
import styles from './WhyUsScreen.module.scss';
import clsx from 'clsx';
import { FaCog, FaStethoscope, FaWrench } from 'react-icons/fa';
import { LuBrain, LuCircleCheckBig, LuFactory, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { BsArrowRightShort } from 'react-icons/bs';

export default function WhyUsScreen() {
  const whyUsText = [
    {
      title: 'Прийом автомобіля',
      description: 'Оцінка стану, фотографії, скарги клієнтів, пробіг',
      classForColor: 'classForColorBlue',
    },
    {
      title: 'Діагностика',
      description: 'Чек-лист, запасні частини, трудомісткість, попередній кошторис',
      classForColor: 'classForColorPurple',
    },
    {
      title: 'Комерційна пропозиція',
      description: 'Остаточний кошторис з роботами та запасними частинами',
      classForColor: 'classForColorLightOrange',
    },
    {
      title: 'Автоматичне погодження',
      description: 'Клієнт отримує фотографії, список робіт і кнопку *Погоджуюсь*',
      classForColor: 'classForColorOrange',
    },
    {
      title: 'Замовлення запасних частин',
      description: 'Інтеграція з постачальниками, контроль маржі',
      classForColor: 'classForColorGreen',
    },
    {
      title: 'Контроль виконання',
      description: 'Фактичні людино-години, простої, хід робіт по автомобілю',
      classForColor: 'classForColorLightBlue',
    },
    {
      title: 'Фото/відео документація',
      description: 'Докази для клієнта та захист від конфліктів',
      classForColor: 'classForColorPink',
    },
    {
      title: 'Оплата та передача автомобіля',
      description: 'Закриття робіт, рекомендації на майбутнє',
      classForColor: 'classForColorYellow',
    },
  ];

  return (
    <section className={styles.whyUs} id='solution'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Прозорість<span> усіх</span> дій
          </h3>
          <div className={styles.borderLine}></div>
          <h5 className={styles.titleForDescription}> Один процес — від діагностики до оплати</h5>
          <p className={styles.textDescription}>
            Під контролем Orbit. Власник бачить загальну картину, менеджер контролює процес, а
            майстри просто виконують роботу.
          </p>
        </div>
        <div className={styles.cardsInfo}>
          {whyUsText.map((info, index) => (
            <div className={clsx(styles.cardInfo, styles[info.classForColor])} key={index}>
              <div className={styles.numberAndTitleBlock}>
                <div className={clsx(styles.numberCardBlock, styles[info.classForColor])}>
                  <h4 className={clsx(styles.numberCardText, styles[info.classForColor])}>
                    0{index + 1}
                  </h4>
                </div>
                <h3 className={styles.cardInfoTitle}>{info.title}</h3>
              </div>
              <p className={styles.cardDescription}>{info.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.blockBottomScreen}>
          <div className={styles.conclusionBlock}>
            <LuCircleCheckBig className={styles.iconCheck} />
            <h6 className={styles.conclusionText}>
              <span>Один процес</span> від діагностики до оплати — усе під контролем
            </h6>
          </div>
        </div>
      </div>

      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.bluePrintTwo)}></div>
    </section>
  );
}
