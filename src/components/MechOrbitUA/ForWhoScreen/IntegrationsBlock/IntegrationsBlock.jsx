import React from 'react';
import styles from './IntegrationsBlock.module.scss';
import clsx from 'clsx';
import { LuCircleCheckBig, LuDatabase } from 'react-icons/lu';
import { GoDotFill, GoGraph } from 'react-icons/go';
import { BsArrowRightShort, BsShopWindow } from 'react-icons/bs';

export default function IntegrationsBlock() {
  const integrationsInfo = [
    {
      title: 'Постачальники',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      buttonText: 'Реєстрація',
      linkToButton: 'https://mech.partners/ua',
      list: [
        {
          pointTitle: 'Inter Cars',
          pointDescription: 'Каталог, ціни, залишки',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'BusMarket',
          pointDescription: 'API, замовлення, прихід на авто',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'AutoNova-D',
          pointDescription: 'Ціни/залишки, підключення',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'UTR',
          pointDescription: 'Узгоджується',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
        {
          pointTitle: 'AD Україна',
          pointDescription: 'Каталоги',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
      ],
    },
    {
      title: 'Платежі',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Включить',
      // linkToButton: '',
      list: [
        {
          pointTitle: 'Fondy',
          pointDescription: 'Каталог, ціни, залишки',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'LiqPay',
          pointDescription: 'API, замовлення, прихід на авто',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'WayForPay',
          pointDescription: 'Ціни/залишки, підключення',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Stripr',
          pointDescription: 'Узгоджується',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
      ],
    },
    {
      title: 'Камери',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Настроить',
      // linkToButton: '',
      list: [
        {
          pointTitle: 'RTSP/ONVIF',
          pointDescription: 'Сумісність більшості камер',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'ANPR/LPR',
          pointDescription: 'Розпізнавання номерів',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'Таймер нормо-годин',
          pointDescription: 'Фактична вартість нормо-години',
          pointStatus: 'LIVE',
        },
      ],
    },
    {
      title: 'API',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Детали',
      // linkToButton: 'https://mech.APi',
      list: [
        {
          pointTitle: 'База ЄДРТЗ',
          pointDescription: 'Єдиний державний реєстр транспортних засобів.',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'IP-телефонія',
          pointDescription: 'Запис розмов, прив’язаний до клієнта',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Чат із клієнтом',
          pointDescription: 'Переписка з усіх месенджерів',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Вчасно. Каса',
          pointDescription: 'Користування ПРРО',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
      ],
    },
  ];

  return (
    <div className={styles.textContentForTwoBlock}>
      <h3 className={styles.textContentForTwoBlockTitle}>Інтеграції</h3>
      <p className={styles.textContentForTwoBlockDescription}>
        Постачальники, платежі, камери — з’єднання без проблем.
      </p>

      <div className={styles.cards}>
        {integrationsInfo.map((info, index) => (
          <div key={index} className={styles.card}>
            <div>
              <div className={styles.headerCard}>
                <h4 className={styles.title}>{info.title}</h4>
                <div className={styles.mainStatusBlock}>
                  <GoDotFill className={styles.badgeIndicator} />
                  <p className={styles.mainStatus}>{info.mainStatus}</p>
                </div>
              </div>
              <div className={styles.listBlock}>
                {info.list.map((textList, index) => (
                  <div key={index} className={styles.pointListBlock}>
                    <div className={styles.pointListTextBlock}>
                      <h5 className={styles.titleList}>{textList.pointTitle}</h5>
                      <p className={styles.descriptionList}>{textList.pointDescription}</p>
                    </div>
                    <div
                      className={clsx(
                        styles.pointListStatusBlock,
                        styles[textList.pointStatusClass],
                      )}>
                      <GoDotFill className={styles.pointListBadgeIndicator} />
                      <p className={styles.pointListMainStatus}>{textList.pointStatus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.tagsAndButton}>
              <div className={styles.tagBlocks}>
                {info.tags.map((tag, index) => (
                  <div key={index} className={styles.tagBlock}>
                    <p className={styles.tagText}>{tag}</p>
                    {index <= 1 && <GoDotFill className={styles.tagBadgeIndicator} />}
                  </div>
                ))}
              </div>
              {info.buttonText && (
                <a href={info.linkToButton} className={styles.button} target='_blank'>
                  {info.buttonText}
                  <BsArrowRightShort className={styles.buttonIcon} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
