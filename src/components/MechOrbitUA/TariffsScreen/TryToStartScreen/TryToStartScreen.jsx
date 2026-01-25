import clsx from 'clsx';
import styles from './TryToStartScreen.module.scss';
import {
  BsArrowRightShort,
  BsCaretRightSquare,
  BsFillHouseFill,
  BsHandIndex,
  BsPersonFill,
  BsPuzzleFill,
} from 'react-icons/bs';
import { IoMdCheckmark } from 'react-icons/io';
import { TbCopyleft } from 'react-icons/tb';
import LangLink from '../../../../components/LangLink/LangLink';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function TryToStartScreen({ isOn, getDisplayPrice }) {
  const tariffsInfo = [
    {
      title: 'Start',
      mainStatus: '1 СТО',
      mainStatusIcon: <BsFillHouseFill className={styles.badgeIndicator} />,
      price: 0,
      tags: [' iOS/', 'Android'],
      buttonText: 'Протестировать',
      list: [
        {
          pointTitle: 'AI‑відео',
          greyColor: true,
        },
        {
          pointTitle: 'CRM / Облік / Склади',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Інтеграція - постачальники',
          pointStatus: '3',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Додаток механіка',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Додаток клієнта',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Аналітика',
        },
        {
          pointTitle: 'WEB розширення',
          greyColor: true,
        },
      ],
    },
  ];

  const infoList = [
    {
      point: 'Без прив`язки картки та автоматичних списань',
    },
    {
      point: 'Повний функціонал для повноцінної роботи',
    },
    {
      point: 'Персональна консультація по налаштуванню',
    },
    {
      point: 'Доступ до AI-аналітики та всіх ключових модулів.',
    },
  ];
  return (
    <section className={styles.tryToStartScreen} id='tryToStart'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Спробуйте <span>Start</span> безкоштовно
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>Безкоштовний тест: 14 днів, без картки.</p>
        </div>

        <div className={styles.cardAndInfo}>
          <div className={styles.cards}>
            {tariffsInfo.map((info, index) => (
              <div key={index} className={styles.card}>
                <div>
                  <div className={styles.headerCard}>
                    <h4 className={styles.title}>{info.title}</h4>
                    <div className={styles.mainStatusBlock}>
                      {info.mainStatusIcon}

                      <p className={styles.mainStatus}>{info.mainStatus}</p>
                    </div>
                  </div>

                  <div className={styles.blockPrice}>
                    <p className={styles.textPrice}>
                      ₴{getDisplayPrice(info.price)}
                      <span>14 днів</span>
                    </p>
                  </div>

                  <div className={styles.listBlock}>
                    {info.list.map((textList, index) => (
                      <div key={index} className={styles.pointListBlock}>
                        <div
                          className={clsx(
                            styles.pointListTextBlock,
                            textList.greyColor && styles.greyColor,
                          )}>
                          <IoMdCheckmark className={styles.checkmarkIcon} />
                          <h5 className={styles.titleList}>{textList.pointTitle}</h5>
                        </div>

                        {textList.pointStatus && (
                          <div className={styles.pointListStatusBlock}>
                            {textList.pointIcon}
                            <p className={styles.pointListMainStatus}>{textList.pointStatus}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.tagsAndText}>
                  <div className={styles.tagBlocks}>
                    <div key={index} className={styles.tagBlock}>
                      <p className={styles.tagText}>
                        Apps —
                        {info.tags.map((tag, index) => (
                          <span key={index}> {tag} </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className={styles.textLaterBlock}>
                    <p className={styles.textLater}>скоро</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoList}>
              {infoList.map((info, index) => (
                <div key={index} className={styles.infoPointBlock}>
                  <IoMdCheckmark className={styles.infoIcon} />
                  <p className={styles.infoText}>{info.point}</p>
                </div>
              ))}
              <LangLink to={'/register'} target='_blank' className={styles.infoButton}>
                🚀 Спробувати 14 днів за 0 грн
                <MdOutlineKeyboardArrowRight className={styles.buttonIcon} />
              </LangLink>
              <LangLink
                to={'/register'}
                target='_blank'
                className={clsx(styles.infoButton, styles.infoButtonPhone)}>
                Войти
                <MdOutlineKeyboardArrowRight className={styles.buttonIcon} />
              </LangLink>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
