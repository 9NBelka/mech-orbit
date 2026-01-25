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
      description: 'A single core for the owner: customers, orders, cash desk, payroll, inventory.',
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
      description:
        'Cameras monitor vehicle entries, downtime, and the actual cost of a labor hour.',
      classForColor: 'classForColorOrange',
      tagCardText: 'Module',
    },
    {
      icon: <BsPhone className={clsx(styles.cardIcon, styles.colorBlue)} />,
      title: 'Apps — iOS/Android',
      description: 'Mobile apps for technicians and customers. Work without a computer.',
      classForColor: 'classForColorGreen',
      tagCardText: 'Module',
    },
    {
      icon: <GoPulse className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Insights — analytics',
      description: 'Profit, downtime, KPIs. An “owner-ready” report in two clicks.',
      classForColor: 'classForColorLightBlue',
      tagCardText: 'Module',
    },
    {
      icon: <LuLink className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Link',
      description: 'Suppliers, payments, cameras, API. An open platform.',
      classForColor: 'classForColorPink',
      tagCardText: 'Module',
    },
    {
      icon: <RxLightningBolt className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'AI mechanic',
      description:
        'An intelligent mechanic — diagnostics and failure prediction, maintenance and repair recommendations.',
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
            Everything you need for your auto service,<span> in one system.</span>
          </h3>

          <div className={styles.borderLine}></div>

          <p className={styles.textDescription}>
            We don’t sell separate apps. MECH Orbit is a single operating system that already
            includes orders, inventory, payroll, analytics, AI-powered video, and mobile apps.
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
