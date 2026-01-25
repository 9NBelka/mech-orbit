import React from 'react';
import styles from './WhatDoWeHaveScreen.module.scss';
import clsx from 'clsx';
import { FaCog, FaStethoscope, FaWrench } from 'react-icons/fa';
import { LuBrain, LuCircleCheckBig, LuFactory, LuLink, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoDotFill, GoPulse } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { BsArrowRightShort, BsBoxSeam, BsDiagram2, BsPhone } from 'react-icons/bs';
import { PiGlobeSimple } from 'react-icons/pi';
import { RxLightningBolt } from 'react-icons/rx';
import { BiBullseye } from 'react-icons/bi';
import TextAndListBlock from './TextAndListBlock/TextAndListBlock';

export default function WhatDoWeHaveScreen() {
  const whatDoWeHaveText = [
    {
      icon: <LuBrain className={clsx(styles.cardIcon, styles.colorPink)} />,
      title: 'Core',
      description: 'Єдине ядро для власника: клієнти, замовлення, каса, зарплати, інвентар.',
      classForColor: 'classForColorBlue',
      tagCardText: 'Module',
    },
    // {
    //   icon: <BsDiagram2 className={clsx(styles.cardIcon, styles.colorLightOrange)} />,
    //   title: 'Hub — mech.vin',
    //   description: 'Єдине ядро для власника: клієнти, замовлення, каса, зарплати, інвентар.',
    //   classForColor: 'classForColorPurple',
    //   tagCardText: 'Module',
    // },
    // {
    //   icon: <BsBoxSeam className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
    //   title: 'Flow — aimech',
    //   description:
    //     'Клієнтський застосунок: запис на послугу, погодження, статуси, рекомендації, сервісна книга.',
    //   classForColor: 'classForColorLightOrange',
    //   tagCardText: 'Module',
    // },
    {
      icon: <BiBullseye className={clsx(styles.cardIcon, styles.colorYellow)} />,
      title: 'Vision',
      description: 'Камери контролюють заїзди автомобілів, простої, фактичну вартість нормо-години',
      classForColor: 'classForColorOrange',
      tagCardText: 'Module',
    },
    {
      icon: <BsPhone className={clsx(styles.cardIcon, styles.colorBlue)} />,
      title: 'Apps — iOS/Android',
      description: 'Мобільні застосунки для майстрів і клієнтів. Робота без комп’ютера.',
      classForColor: 'classForColorGreen',
      tagCardText: 'Module',
    },
    {
      icon: <GoPulse className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Insights — аналітика',
      description: 'Прибуток, простої, KPI. Звіт «для власника» у два кліки.',
      classForColor: 'classForColorLightBlue',
      tagCardText: 'Module',
    },
    {
      icon: <LuLink className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Link',
      description: 'Постачальники, платежі, камери, API. Відкрита платформа.',
      classForColor: 'classForColorPink',
      tagCardText: 'Module',
    },
    {
      icon: <RxLightningBolt className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'AI mechanic',
      description:
        'Інтелектуальний механік — діагностика та прогнозування несправностей, рекомендації з обслуговування та ремонту.',
      classForColor: 'classForColorYellow',
      tagCardText: 'Module',
    },
    // {
    //   icon: <PiGlobeSimple className={clsx(styles.cardIcon, styles.colorBrown)} />,
    //   title: 'WEB',
    //   description:
    //     'Розширення для браузера. Вибір запасних частин із CRM прямо на сайті постачальника.',
    //   classForColor: 'classForColorBrown',
    //   tagCardText: 'Module',
    // },
  ];

  return (
    <section className={styles.whatDoWeHave} id=''>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Усе, що вам потрібно для автосервісу,<span> знаходиться в одній системі.</span>
          </h3>

          <div className={styles.borderLine}></div>

          <p className={styles.textDescription}>
            Ми не продаємо окремі програми. MECH Orbit — це єдина операційна система, яка вже
            включає замовлення, інвентар, зарплату, аналітику, відео з ШІ та мобільні застосунки.
          </p>
        </div>
        <div className={styles.cardsInfo}>
          {whatDoWeHaveText.map((info, index) => (
            <div className={clsx(styles.cardInfo, styles[info.classForColor])} key={index}>
              <div className={styles.iconAndTitleBlock}>
                <div className={clsx(styles.iconCardBlock, styles[info.classForColor])}>
                  {info.icon}
                </div>
                <h3 className={styles.cardInfoTitle}>{info.title}</h3>
              </div>
              <p className={styles.cardDescription}>{info.description}</p>
              {/* <div className={styles.buttonLinkBlock}>
                <a href='#' className={styles.buttonLink}>
                  Узнать больше <BsArrowRightShort className={styles.buttonIcon} />
                </a>
              </div> */}
              <div className={styles.tagCard}>
                <p className={styles.tagCardText}>{info.tagCardText}</p>
              </div>
            </div>
          ))}
        </div>
        <TextAndListBlock />
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrintTwo)}></div>
    </section>
  );
}
