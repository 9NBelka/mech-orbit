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
import LangLink from '../../../components/LangLink/LangLink';

export default function AboutUsScreen({ scrollToSection }) {
  const aboutUsText = [
    {
      icon: <CgFileDocument className={styles.cardIcon} />,
      title: 'Контроль роботи СТО',
      description:
        'Планування боксів, AI-контроль простоїв і підтвердження виконаних робіт клієнтом зі смартфона.',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <FaArrowTrendUp className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Фінанси та аналітика',
      description:
        'Аналітика прибутковості в один клік та інтеграції з платежами й постачальниками без ручного обліку.',
      classForHover: 'classForHoverPurple',
    },
    {
      icon: <LuFactory className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Запчастини та склад',
      description:
        'Каталоги запчастин, адресне зберігання, автоматична націнка та контроль залишків у реальному часі.',
      classForHover: 'classForHoverOrange',
    },
  ];

  return (
    <section className={styles.aboutUs} id='product'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>власник, менеджер, керівник</p>
          </div>

          <h3 className={styles.titleScreen}>
            <span>CRMmech</span> — управління та облік для автосервісів
          </h3>

          <div className={styles.borderLine}></div>

          <p className={styles.textDescription}>
            Автоматична реєстрація клієнтів, вибір запчастин, інтеграція з постачальниками,
            запчастини замовляються на автомобіль клієнта, а не на склад
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
            <LangLink to='/register' target='_blank' className={styles.button}>
              Підключити
            </LangLink>

            {/* <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Подключить
            </button> */}
            <a href='https://crmmech.com' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                Дізнатися більше
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
