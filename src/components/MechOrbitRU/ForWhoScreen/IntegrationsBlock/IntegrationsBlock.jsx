import React from 'react';
import styles from './IntegrationsBlock.module.scss';
import clsx from 'clsx';
import { LuCircleCheckBig, LuDatabase } from 'react-icons/lu';
import { GoDotFill, GoGraph } from 'react-icons/go';
import { BsArrowRightShort, BsShopWindow } from 'react-icons/bs';

export default function IntegrationsBlock() {
  const integrationsInfo = [
    {
      title: 'Поставщики',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      buttonText: 'Регистрация',
      linkToButton: 'https://mech.partners/',
      list: [
        {
          pointTitle: 'Inter Cars',
          pointDescription: 'Каталог, цены, остатки',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'BusMarket',
          pointDescription: 'API, заказ, приход на авто',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'AutoNova-D',
          pointDescription: 'Цены/остатки, подключение',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'UTR',
          pointDescription: 'Согласовывается',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
        {
          pointTitle: 'AD Украина',
          pointDescription: 'Каталоги',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
      ],
    },
    {
      title: 'Платежи',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Включить',
      // linkToButton: '',
      list: [
        {
          pointTitle: 'Fondy',
          pointDescription: 'Каталог, цены, остатки',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'LiqPay',
          pointDescription: 'API, заказ, приход на авто',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'WayForPay',
          pointDescription: 'Цены/остатки, подключение',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Stripr',
          pointDescription: 'Согласовывается',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
      ],
    },
    {
      title: 'Камеры',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Настроить',
      // linkToButton: '',
      list: [
        {
          pointTitle: 'RTSP/ONVIF',
          pointDescription: 'Совместимость большинства камер',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'ANPR/LPR',
          pointDescription: 'Распознавание номеров',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'Таймер нормо часа',
          pointDescription: 'Фактическая стоимость нормо часа',
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
          pointTitle: 'База ЕГРТС',
          pointDescription: 'Единый государственный реестр транспортных средств.',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'IP телефония',
          pointDescription: 'Запись разговоров привязана к клиенту',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Чат с клиентом',
          pointDescription: 'Переписка со всех мессенджеров',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Чат с клиентом',
          pointDescription: 'Пользоваться ПРРО',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
      ],
    },
  ];

  return (
    <div className={styles.textContentForTwoBlock}>
      <h3 className={styles.textContentForTwoBlockTitle}>Интеграции</h3>
      <p className={styles.textContentForTwoBlockDescription}>
        Поставщики, платежи, камеры — соединение без проблем.
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
