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
      title: 'Незалежні сервісні станції',
      description: 'Збільште прибуток, усуньте хаос і звільніться від операційної ями власника.',
      classForColor: 'classForColorBlue',
    },
    {
      icon: <GoGraph className={clsx(styles.cardIcon, styles.colorBlue)} />,
      title: 'Мережі',
      description:
        'Єдині стандарти, процеси, аналітика та моделі розрахунку заробітної плати у всіх локаціях.',
      classForColor: 'classForColorPurple',
    },
    {
      icon: <BsShopWindow className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Нові локації',
      description: 'Запуск за моделлю Orbit: одразу з системою, а не з хаосом у чатах і таблицях.',
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
            Для кого створений <span> MECH Orbit</span>
          </h3>

          <div className={styles.borderLine}></div>

          <p className={styles.textDescription}>
            MECH підходить як для невеликих автосервісів, так і для великих мереж. Завдяки системі
            навчання, вбудованій усередині продукту MECH, старт роботи легкий і зрозумілий.
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
