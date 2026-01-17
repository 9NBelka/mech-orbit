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
      title: 'Независимые сервисные станции',
      description:
        'Увеличьте прибыль, устраните хаос и освободитесь от операционной ямы владельца.',
      classForColor: 'classForColorBlue',
    },
    {
      icon: <GoGraph className={clsx(styles.cardIcon, styles.colorBlue)} />,
      title: 'Сети',
      description:
        'Единые стандарты, процессы, аналитика и модели расчета заработной платы во всех локациях.',
      classForColor: 'classForColorPurple',
    },
    {
      icon: <BsShopWindow className={clsx(styles.cardIcon, styles.colorOrange)} />,
      title: 'Новые локации',
      description: 'Запус по модели Orbit: сразу с системой, а не с хаосом в чатах и таблицах.',
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
            Для кого создан <span> MECH Orbit</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Mech подходит как для небольших автосервисов, так и крупных сетей, с помощью системы
            обучения, встроенной внутри продукта MECH - старт работы лёгкий и понятный.
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
