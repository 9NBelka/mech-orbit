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
      description: 'Единое ядро для владельца: клиенты, заказы, касса, зарплаты, инвентарь.',
      classForColor: 'classForColorBlue',
      tagCardText: 'Module',
    },
    // {
    //   icon: <BsDiagram2 className={clsx(styles.cardIcon, styles.colorLightOrange)} />,
    //   title: 'Hub — mech.vin',
    //   description: 'Единое ядро для владельца: клиенты, заказы, касса, зарплаты, инвентарь.',
    //   classForColor: 'classForColorPurple',
    //   tagCardText: 'Module',
    // },
    // {
    //   icon: <BsBoxSeam className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
    //   title: 'Flow — aimech',
    //   description:
    //     'Клиентское приложение: запись на услугу, утверждения, статусы, рекомендации, сервисная книга.',
    //   classForColor: 'classForColorLightOrange',
    //   tagCardText: 'Module',
    // },
    {
      icon: <BiBullseye className={clsx(styles.cardIcon, styles.colorYellow)} />,
      title: 'Vision',
      description: 'Камеры контролируют машинозаезды, простои, фактическую стоимость нормочаса',
      classForColor: 'classForColorOrange',
      tagCardText: 'Module',
    },
    {
      icon: <BsPhone className={clsx(styles.cardIcon, styles.colorBlue)} />,
      title: 'Apps — iOS/Android',
      description: 'Мобильные приложения для мастеров и клиентов. Работа без компьютера.',
      classForColor: 'classForColorGreen',
      tagCardText: 'Module',
    },
    {
      icon: <GoPulse className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Insights — аналітика',
      description: 'Прибыль, простои, KPI. Отчет "для владельца" в два клика.',
      classForColor: 'classForColorLightBlue',
      tagCardText: 'Module',
    },
    {
      icon: <LuLink className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Link',
      description: 'Поставщики, платежи, камеры, API. Открытая платформа.',
      classForColor: 'classForColorPink',
      tagCardText: 'Module',
    },
    {
      icon: <RxLightningBolt className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'AI mechanic',
      description:
        'Интеллектуальный механик - диагностика и прогнозирование неисправностей, рекомендации по обслуживанию и ремонту.',
      classForColor: 'classForColorYellow',
      tagCardText: 'Module',
    },
    // {
    //   icon: <PiGlobeSimple className={clsx(styles.cardIcon, styles.colorBrown)} />,
    //   title: 'WEB',
    //   description:
    //     'Расширение для браузера. Выбор запасных частей из CRM прямо на сайте поставщика.',
    //   classForColor: 'classForColorBrown',
    //   tagCardText: 'Module',
    // },
  ];

  return (
    <section className={styles.whatDoWeHave} id=''>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Все, что вам нужно для автосервиса, <span> находится в одной системе.</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Мы не продаем отдельные программы. MECH Orbit — это единственная операционная система,
            которая уже включает заказы, инвентарь, зарплату, аналитику, видео ИИ и мобильные
            приложения.
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
