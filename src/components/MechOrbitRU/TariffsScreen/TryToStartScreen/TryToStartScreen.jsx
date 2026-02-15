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
          pointTitle: 'AI‑видео',
          greyColor: true,
        },
        {
          pointTitle: 'CRM / Учёт / Склады',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Интеграция – поставщики',
          pointStatus: '3',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Приложение механика',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Приложение клиента',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Аналитика',
        },
        {
          pointTitle: 'WEB расширение',
          greyColor: true,
        },
      ],
    },
  ];

  const infoList = [
    {
      point: 'Без привязки карты и автоматических списаний',
    },
    {
      point: 'Полный функционал для полноценной работы',
    },
    {
      point: 'Персональная консультация по настройке',
    },
    {
      point: 'Доступ к AI-аналитике и всем ключевым модулям.',
    },
  ];
  return (
    <section className={styles.tryToStartScreen} id='tryToStart'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Попробуйте <span>Start</span> бесплатно
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>Бесплатный тест: 14 дней, без карты.</p>
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
                      <span>14 дней</span>
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
              <LangLink to={'/register'} className={styles.infoButton}>
                🚀 Попробовать 14 дней за 0 грн
                <MdOutlineKeyboardArrowRight className={styles.buttonIcon} />
              </LangLink>
              <LangLink
                to={'/register'}
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
