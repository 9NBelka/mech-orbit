import React from 'react';
import styles from './ForWhoScreen.module.scss';
import clsx from 'clsx';
import { LuCircleCheckBig, LuDatabase } from 'react-icons/lu';
import { GoGraph } from 'react-icons/go';
import { BsShopWindow } from 'react-icons/bs';
import IntegrationsBlock from './IntegrationsBlock/IntegrationsBlock';

export default function ForWhoScreen() {
  const forWhoText = [
    {
      icon: <LuDatabase className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Independent service stations',
      description:
        'Increase profit, eliminate chaos, and free yourself from the owner’s operational burden.',
      classForColor: 'classForColorBlue',
    },
    {
      icon: <GoGraph className={clsx(styles.cardIcon, styles.colorBlue)} />,
      title: 'Networks',
      description:
        'Unified standards, processes, analytics, and payroll calculation models across all locations.',
      classForColor: 'classForColorPurple',
    },
    {
      icon: <BsShopWindow className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'New locations',
      description:
        'Launch using the Orbit model: immediately with the system, not with chaos in chats and spreadsheets.',
      classForColor: 'classForColorLightOrange',
    },
  ];

  return (
    <section className={styles.forWho} id='integrations'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>The Big Vision</p>
          </div>

          <h3 className={styles.titleScreen}>
            Who MECH Orbit is created for <span> MECH Orbit</span>
          </h3>

          <div className={styles.borderLine}></div>

          <p className={styles.textDescription}>
            MECH is suitable for both small service centers and large networks. Thanks to the
            training system built into the MECH product, starting work is easy and clear.
          </p>
        </div>

        <div className={styles.cardsInfo}>
          {forWhoText.map((info, index) => (
            <div className={clsx(styles.cardInfo, styles[info.classForColor])} key={index}>
              <div className={styles.iconAndTitleBlock}>
                <div className={clsx(styles.iconCardBlock, styles[info.classForColor])}>
                  {info.icon}
                </div>
                <h3 className={styles.cardInfoTitle}>{info.title}</h3>
              </div>
              <p className={styles.cardDescription}>{info.description}</p>
            </div>
          ))}
        </div>
        <IntegrationsBlock />
      </div>
    </section>
  );
}
