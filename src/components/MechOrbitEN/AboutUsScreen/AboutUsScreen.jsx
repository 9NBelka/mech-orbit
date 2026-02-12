import React from 'react';
import styles from './AboutUsScreen.module.scss';
import clsx from 'clsx';
import { FaCog, FaStethoscope, FaWrench } from 'react-icons/fa';
import { LuBrain, LuFactory, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { BsArrowRightShort } from 'react-icons/bs';
import LangLink from '../../../components/LangLink/LangLink';

export default function AboutUsScreen({ scrollToSection }) {
  const aboutUsText = [
    {
      icon: <CgFileDocument className={styles.cardIcon} />,
      title: 'Auto Service Control',
      description:
        'Service bay planning, AI idle-time control, and confirmation of completed work by the customer via smartphone.',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <FaArrowTrendUp className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Finance & Analytics',
      description:
        'One-click profitability analytics and integrations with payments and suppliers without manual accounting.',
      classForHover: 'classForHoverPurple',
    },
    {
      icon: <LuFactory className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Parts & Inventory',
      description:
        'Parts catalogs, location-based storage, automatic markup, and real-time stock control.',
      classForHover: 'classForHoverOrange',
    },
  ];

  return (
    <section className={styles.aboutUs} id='product'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>owner, manager, supervisor</p>
          </div>

          <h3 className={styles.titleScreen}>
            <span>CRMmech</span> — management and accounting for auto services
          </h3>

          <div className={styles.borderLine}></div>

          <p className={styles.textDescription}>
            Automatic customer registration, parts selection, supplier integrations — parts are
            ordered for the customer’s vehicle, not stocked in advance
          </p>

          <div className={styles.imageAndIconBlocks}>
            <div className={styles.blockImageDashboard}>
              <img src='/images/mech-orbit-screen-dashboard.webp' />
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
              Connect
            </LangLink>

            {/* <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Connect
            </button> */}

            <a href='https://crmmech.com' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                Learn more
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
