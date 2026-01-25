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
      title: 'Фотофіксація авто',
      description: 'Швидке фото пошкоджень та стану автомобіля з мобільного',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <LuWrench className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Мобільна діагностика',
      description: 'Проведення діагностики та фіксація результатів прямо з телефону',
      classForHover: 'classForHoverPurple',
    },

    {
      icon: <LuClipboardList className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'Управління роботами',
      description: 'Контроль хода робіт, оновлення статусів завдань',
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <LuBox className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Наявність запчастин',
      description: 'Оновлення статусу замовлених запчастин для кожного автомобіля',
      classForHover: 'classForHoverOrange',
    },
  ];
  return (
    <section className={styles.aboutUs} id='product'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          {/* <div className={styles.tagBlock}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>Створено реальним автосервісом</p>
          </div> */}
          <h3 className={styles.titleScreen}>
            <span>Мобільний додаток автомеханіка</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>Всі дані з додатку миттєво потрапляють у CRMmech</p>
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
              <img src='images/mech-orbit-screen-vin-app-phone.jpg' />
            </div>
          </div>
          <div className={styles.buttons}>
            <Link to='https://mech.vin' target='_blank' className={styles.button}>
              Дізнатися більше <BsArrowRightShort className={styles.buttonIconTwo} />
            </Link>

            {/* <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Подключить
            </button> */}
            {/* <a href='https://crmmech.com/' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                Узнать больше
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
