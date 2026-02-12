import { FaArrowTrendUp } from 'react-icons/fa6';
import styles from './AboutUsScreenVinApp.module.scss';
import clsx from 'clsx';
import { LuBox, LuCamera, LuClipboardList, LuFactory, LuWrench } from 'react-icons/lu';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function AboutUsScreenVinApp({ scrollToSection }) {
  const aboutUsText = [
    {
      icon: <LuCamera className={styles.cardIcon} />,
      title: 'Vehicle Photo Documentation',
      description: 'Quick photos of vehicle damage and condition directly from a mobile device',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <LuWrench className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Mobile Diagnostics',
      description: 'Perform diagnostics and record results directly from your phone',
      classForHover: 'classForHoverPurple',
    },

    {
      icon: <LuClipboardList className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'Work Management',
      description: 'Control work progress and update task statuses',
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <LuBox className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Spare Parts Availability',
      description: 'Update the status of ordered spare parts for each vehicle',
      classForHover: 'classForHoverOrange',
    },
  ];
  return (
    <section className={styles.aboutUs} id='product'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          {/* <div className={styles.tagBlock}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>Created by a real auto service</p>
          </div> */}
          <h3 className={styles.titleScreen}>
            <span>Mobile App for Auto Mechanics</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            All data from the app is instantly synced with CRMmech
          </p>
          <div className={styles.imageAndIconBlocks}>
            <div className={styles.iconsBlocks}>
              {aboutUsText.map((text, index) => (
                <div key={index} className={styles.card}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerLightBlue,
                      index === 2 && styles.iconContainerGreen,
                      index === 3 && styles.iconContainerPurple,
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
            <div className={styles.blockImageDashboard}>
              <img src='/images/mech-orbit-screen-vin-app-phone.jpg' />
            </div>
          </div>
          <div className={styles.buttons}>
            <Link to='https://mech.vin' target='_blank' className={styles.button}>
              Learn more <BsArrowRightShort className={styles.buttonIconTwo} />
            </Link>

            {/* <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Connect
            </button> */}
            {/* <a href='https://crmmech.com/' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                Learn more
                <BsArrowRightShort className={styles.buttonIconTwo} />
              </button>
            </a> */}
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
