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
      title: 'Електронна Сервісна Книга',
      description:
        'Незамінний помічник. Повна історія обслуговування, яка завжди під рукою. Підвищує залишкову вартість авто при продажу.',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <TbSettingsFilled className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Регламент від Виробника',
      description:
        'Забудьте про здогадки. Додаток чітко скаже, коли міняти ГРМ, рідини та свічки саме для вашої моделі авто.',
      classForHover: 'classForHoverPurple',
    },

    {
      icon: <RiWallet3Fill className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'Контроль Витрат',
      description:
        'Зберігайте чеки простим фотографуванням. Розумійте реальну вартість володіння кілометром пробігу.',
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <RiAlertLine className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Попередження Поломок',
      description:
        'Аналізуючи дані тисяч подібних авто, система попередить про типові слабкі місця вашої моделі до того, як вони стануть проблемою.',
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
            <span>Bookvin</span> - мобільний додаток автовласника
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Ми створили bookvin з побажань автовласників. В основі — регламенти автовиробників та
            досвід обслуговування тисяч авто.
          </p>
          <div className={styles.imageAndIconBlocks}>
            <div className={styles.blockImageDashboard}>
              <img src='images/mech-orbit-screen-bookvin.webp' />
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
            <Link to='https://book.vin' target='_blank' className={styles.button}>
              Узнать больше <BsArrowRightShort className={styles.buttonIconTwo} />
            </Link>

            {/* <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
              Подключить
            </button>
            <a href='https://crmmech.com/' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                Дивитись результати
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
