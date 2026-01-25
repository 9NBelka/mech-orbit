import { useState } from 'react';
import { useRef } from 'react';
import styles from './TariffsTabletAndMobile.module.scss';
import clsx from 'clsx';
import {
  BsCameraVideo,
  BsCaretRightSquare,
  BsChevronLeft,
  BsChevronRight,
  BsFillHouseFill,
  BsHandIndex,
  BsPersonFill,
  BsPuzzleFill,
  BsShopWindow,
} from 'react-icons/bs';
import { IoMdCheckmark } from 'react-icons/io';

export default function TariffsTabletAndMobile({ isOn, getDisplayPrice }) {
  const tariffsInfo = [
    {
      title: 'Start',
      mainStatus: '1 СТО',
      mainStatusIcon: <BsFillHouseFill className={styles.badgeIndicator} />,
      price: 990,
      tags: [' iOS/', 'Android'],
      buttonText: 'Выбрать Start',
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
    {
      title: 'Profi',
      mainStatus: '4 - 8 постов',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 4390,
      tags: [' iOS/', 'Android'],
      buttonText: 'Выбрать Profi',
      list: [
        {
          pointTitle: 'AI‑видео',
          pointStatus: '10',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Учёт / Склады',
          pointStatus: '8',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Интеграция – поставщики',
          pointStatus: '20',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Приложение механика',
          pointStatus: '20',
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
        },
      ],
    },
    {
      title: 'Full',
      mainStatus: '1 - 3 поста',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 2990,
      tags: [' iOS/', 'Android'],
      buttonText: 'Выбрать Full',
      list: [
        {
          pointTitle: 'AI‑видео',
          pointStatus: '4',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Учёт / Склады',
          pointStatus: '4',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Интеграция – поставщики',
          pointStatus: '10',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Приложение механика',
          pointStatus: '6',
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
        },
      ],
    },

    {
      title: 'Maximal',
      mainStatus: 'от 9 постов',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 5890,
      tags: [' iOS/', 'Android'],
      buttonText: 'Выбрать Maximal',
      list: [
        {
          pointTitle: 'AI‑видео',
          pointStatus: '∞',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Учёт / Склады',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Интеграция – поставщики',
          pointStatus: '∞',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Приложение механика',
          pointStatus: '∞',
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
        },
      ],
    },
    {
      title: 'Network',
      mainStatus: 'от 9 постов',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 5290,
      tags: [' iOS/', ' Android'],
      buttonText: 'Выбрать Network',
      list: [
        {
          pointTitle: 'AI‑видео',
          pointStatus: '∞',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Учёт / Склады',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Интеграция – поставщики',
          pointStatus: '∞',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Приложение механика',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Приложение клиента',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Аналитика',
          pointStatus: 'BETA',
        },
        {
          pointTitle: 'WEB расширение',
        },
      ],
    },
  ];

  return (
    <div className={styles.cards}>
      {tariffsInfo.map((info, index) => (
        <div key={index} className={clsx(styles.card, index == 1 && styles.cardPurple)}>
          <div>
            <div className={styles.headerCard}>
              <h4 className={clsx(styles.title, index == 1 && styles.titlePurple)}>{info.title}</h4>
              <div className={styles.mainStatusBlock}>
                {info.mainStatusIcon}

                <p className={styles.mainStatus}>{info.mainStatus}</p>
              </div>
            </div>
            {index == 0 ? (
              <div className={styles.blockPrice}>
                <p className={styles.textPrice}>
                  {isOn && <span className={styles.oldPrice}>₴{info.price}</span>}₴{' '}
                  {getDisplayPrice(info.price)}
                  {!isOn ? <span>/мес</span> : <span>/мес за локацию</span>}
                </p>
              </div>
            ) : (
              <div className={styles.blockPrice}>
                <p className={styles.textPrice}>
                  {isOn && <span className={styles.oldPrice}>₴{info.price}</span>} ₴{' '}
                  {getDisplayPrice(info.price)}
                  <span>/мес за локацию</span>
                </p>
              </div>
            )}
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
          <div className={styles.buttonBlock}>
            <a href='#' className={clsx(styles.button, index == 2 && styles.buttonPurple)}>
              <BsHandIndex className={styles.buttonIcon} />

              {info.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
