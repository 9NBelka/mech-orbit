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
      title: 'Электронная Сервисная Книга',
      description:
        'Незаменимый ассистент. Полная история обслуживания, которая всегда находится под рукой. Повышает остаточную стоимость авто при продаже.',
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <TbSettingsFilled className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: 'Регламент от Производителя',
      description:
        'Забудьте о догадках. Приложение ясно скажет, когда менять ГРМ, жидкости и свечи именно для вашей модели авто.',
      classForHover: 'classForHoverPurple',
    },

    {
      icon: <RiWallet3Fill className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: 'Контроль Расходов',
      description:
        'Храните чеки простой фотографией. Понимайте реальную стоимость владения километром пробега.',
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <RiAlertLine className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: 'Предупреждение Поломок',
      description:
        'Анализируя данные тысяч подобных авто, система предупредит о типичных слабых местах вашей модели до того, как они станут проблемой.',
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
            <span>Bookvin</span> - мобильное приложение автовладельца
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Мы создали bookvin из пожеланий автовладельцев. В основе - регламенты автопроизводителей
            и опыт обслуживания тысяч авто.
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
