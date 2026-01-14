import React from 'react';
import styles from './AboutUsScreen.module.scss';
import clsx from 'clsx';
import { FaCog, FaStethoscope, FaWrench } from 'react-icons/fa';
import { LuBrain, LuFactory, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function AboutUsScreen({ scrollToSection }) {
  const aboutUsText = [
    {
      icon: <CgFileDocument className={styles.cardIcon} />,
      title: 'Контроль работы СТО',
      description:
        'Планирование боксов, AI-контроль простоев и подтверждение выполненных работ клиентом со смартфона.',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <FaArrowTrendUp className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Финансы и аналитика',
      description:
        'Аналитика прибыльности в один клик и интеграции с платежами и поставщиками без ручного учета.',
      classForHover: 'classForHoverPurple',
    },
    {
      icon: <LuFactory className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Запчасти и склад',
      description:
        'Каталоги запчастей, адресное хранение, автоматическая наценка и контроль остатков в реальном времени.',
      classForHover: 'classForHoverOrange',
    },
  ];

  return (
    <section className={styles.aboutUs} id='product'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>владелец, менеджер, супервайзер</p>
          </div>
          <h3 className={styles.titleScreen}>
            <span>CRMmech</span> - управление и бухгалтерия для автосервисов
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Автоматическая регистрация клиентов, выбор запчастей, интеграция с поставщиками, заказ
            запчастей напрямую для автомобиля
          </p>
          <div className={styles.imageAndIconBlocks}>
            <div className={styles.blockImageDashboard}>
              <img src='images/mech-orbit-screen-dashboard.webp' />
            </div>
            <div className={styles.iconsBlocks}>
              {aboutUsText.map((text, index) => (
                <div key={index} className={styles.card}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerPurple,
                      index === 2 && styles.iconContainerLightBlue,
                    )}>
                    {text.icon}
                  </div>
                  <div className={styles.cardTitleAndDescription}>
                    <h4 className={styles.cardTitle}>{text.title}</h4>
                    <p className={styles.cardDescription}>{text.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.buttons}>
            {/* <Link to='/register' target='_blank' className={styles.button}>
              Подключить
            </Link> */}

            <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Подключить
            </button>
            <a href='https://crmmech.com/' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                Дивитись результати
                <BsArrowRightShort className={styles.buttonIconTwo} />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
