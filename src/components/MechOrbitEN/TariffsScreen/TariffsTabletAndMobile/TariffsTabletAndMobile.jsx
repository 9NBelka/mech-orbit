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
      mainStatus: '1 LOCATION',
      mainStatusIcon: <BsFillHouseFill className={styles.badgeIndicator} />,
      price: 990,
      tags: [' iOS/', 'Android'],
      buttonText: 'Choose Start',
      list: [
        {
          pointTitle: 'AI Video',
          greyColor: true,
        },
        {
          pointTitle: 'CRM / Accounting / Warehouses',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Integration – Suppliers',
          pointStatus: '3',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Mechanic App',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Client App',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Analytics',
        },
        {
          pointTitle: 'WEB Extension',
          greyColor: true,
        },
      ],
    },
    {
      title: 'Profi',
      mainStatus: '4 – 8 locations',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 4390,
      tags: [' iOS/', 'Android'],
      buttonText: 'Choose Profi',
      list: [
        {
          pointTitle: 'AI Video',
          pointStatus: '10',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Accounting / Warehouses',
          pointStatus: '8',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Integration – Suppliers',
          pointStatus: '20',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Mechanic App',
          pointStatus: '20',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Client App',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Analytics',
        },
        {
          pointTitle: 'WEB Extension',
        },
      ],
    },
    {
      title: 'Full',
      mainStatus: '1 – 3 locations',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 2990,
      tags: [' iOS/', 'Android'],
      buttonText: 'Choose Full',
      list: [
        {
          pointTitle: 'AI Video',
          pointStatus: '4',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Accounting / Warehouses',
          pointStatus: '4',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Integration – Suppliers',
          pointStatus: '10',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Mechanic App',
          pointStatus: '6',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Client App',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Analytics',
        },
        {
          pointTitle: 'WEB Extension',
        },
      ],
    },
    {
      title: 'Maximal',
      mainStatus: '9+ locations',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 5890,
      tags: [' iOS/', 'Android'],
      buttonText: 'Choose Maximal',
      list: [
        {
          pointTitle: 'AI Video',
          pointStatus: '∞',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Accounting / Warehouses',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Integration – Suppliers',
          pointStatus: '∞',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Mechanic App',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Client App',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Analytics',
        },
        {
          pointTitle: 'WEB Extension',
        },
      ],
    },
    {
      title: 'Network',
      mainStatus: '9+ locations',
      mainStatusIcon: <BsShopWindow className={styles.badgeIndicator} />,
      price: 5290,
      tags: [' iOS/', 'Android'],
      buttonText: 'Choose Network',
      list: [
        {
          pointTitle: 'AI Video',
          pointStatus: '∞',
          pointIcon: <BsCameraVideo className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'CRM / Accounting / Warehouses',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Integration – Suppliers',
          pointStatus: '∞',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Mechanic App',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Client App',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Analytics',
          pointStatus: 'BETA',
        },
        {
          pointTitle: 'WEB Extension',
        },
      ],
    },
  ];

  return (
    <div className={styles.cards}>
      {tariffsInfo.map((info, index) => (
        <div key={index} className={clsx(styles.card, index === 1 && styles.cardPurple)}>
          <div>
            <div className={styles.headerCard}>
              <h4 className={clsx(styles.title, index === 1 && styles.titlePurple)}>
                {info.title}
              </h4>
              <div className={styles.mainStatusBlock}>
                {info.mainStatusIcon}
                <p className={styles.mainStatus}>{info.mainStatus}</p>
              </div>
            </div>

            {index === 0 ? (
              <div className={styles.blockPrice}>
                <p className={styles.textPrice}>
                  {isOn && <span className={styles.oldPrice}>₴{info.price}</span>}₴{' '}
                  {getDisplayPrice(info.price)}
                  {!isOn ? <span>/mo</span> : <span>/mo per location</span>}
                </p>
              </div>
            ) : (
              <div className={styles.blockPrice}>
                <p className={styles.textPrice}>
                  {isOn && <span className={styles.oldPrice}>₴{info.price}</span>} ₴{' '}
                  {getDisplayPrice(info.price)}
                  <span>/mo per location</span>
                </p>
              </div>
            )}

            <div className={styles.listBlock}>
              {info.list.map((textList, idx) => (
                <div key={idx} className={styles.pointListBlock}>
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
              <div className={styles.tagBlock}>
                <p className={styles.tagText}>
                  Apps —
                  {info.tags.map((tag, idx) => (
                    <span key={idx}> {tag} </span>
                  ))}
                </p>
              </div>
            </div>

            <div className={styles.textLaterBlock}>
              <p className={styles.textLater}>coming soon</p>
            </div>
          </div>

          <div className={styles.buttonBlock}>
            <a href='#' className={clsx(styles.button, index === 2 && styles.buttonPurple)}>
              <BsHandIndex className={styles.buttonIcon} />
              {info.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
