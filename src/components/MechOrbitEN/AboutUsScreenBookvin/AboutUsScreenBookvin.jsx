import { FaArrowTrendUp } from 'react-icons/fa6';
import styles from './AboutUsScreenBookvin.module.scss';
import clsx from 'clsx';
import { CgFileDocument } from 'react-icons/cg';
import { LuFactory } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';
import { BsArrowRightShort, BsIntersect } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { RiAlertLine, RiMap2Fill, RiWallet3Fill } from 'react-icons/ri';
import { TbSettingsFilled } from 'react-icons/tb';

export default function AboutUsScreenBookvin({ scrollToSection }) {
  const aboutUsText = [
    {
      icon: <BsIntersect className={styles.cardIcon} />,
      title: 'Electronic Service Book',
      description:
        'An indispensable assistant. A complete service history always at hand. Increases the residual value of the car when selling.',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <TbSettingsFilled className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Manufacturer Service Schedule',
      description:
        'Forget the guesswork. The app clearly tells you when to replace the timing belt, fluids, and spark plugs specifically for your car model.',
      classForHover: 'classForHoverPurple',
    },

    {
      icon: <RiWallet3Fill className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'Expense Control',
      description:
        'Store receipts with a simple photo. Understand the real cost of ownership per kilometer driven.',
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <RiAlertLine className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Breakdown Prevention',
      description:
        'By analyzing data from thousands of similar vehicles, the system warns you about common weak points of your model before they become a problem.',
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
            <span>Bookvin</span> — car owner mobile app
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            We created Bookvin based on the wishes of car owners. At its core are manufacturer
            service regulations and the experience of servicing thousands of vehicles.
          </p>
          <div className={styles.imageAndIconBlocks}>
            <div className={styles.blockImageDashboard}>
              <img src='/images/mech-orbit-screen-bookvin-phone.jpg' />
            </div>
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
          </div>
          <div className={styles.buttons}>
            <Link to='https://book.vin/ua' target='_blank' className={styles.button}>
              Learn more <BsArrowRightShort className={styles.buttonIconTwo} />
            </Link>

            {/* <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Connect
            </button>
            <a href='https://crmmech.com/' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                View results
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
