import React from 'react';
import styles from './IntegrationsBlock.module.scss';
import clsx from 'clsx';
import { LuCircleCheckBig, LuDatabase } from 'react-icons/lu';
import { GoDotFill, GoGraph } from 'react-icons/go';
import { BsArrowRightShort, BsShopWindow } from 'react-icons/bs';

export default function IntegrationsBlock() {
  const integrationsInfo = [
    {
      title: 'Suppliers',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      buttonText: 'Registration',
      linkToButton: 'https://mech.partners/ua',
      list: [
        {
          pointTitle: 'Inter Cars',
          pointDescription: 'Catalog, prices, stock',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'BusMarket',
          pointDescription: 'API, orders, car arrival',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'AutoNova-D',
          pointDescription: 'Prices/stock, connection',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'UTR',
          pointDescription: 'Agreed',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
        {
          pointTitle: 'AD Ukraine',
          pointDescription: 'Catalogs',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
      ],
    },
    {
      title: 'Payments',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Enable',
      // linkToButton: '',
      list: [
        {
          pointTitle: 'Fondy',
          pointDescription: 'Catalog, prices, stock',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'LiqPay',
          pointDescription: 'API, orders, car arrival',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'WayForPay',
          pointDescription: 'Prices/stock, connection',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Stripr',
          pointDescription: 'Agreed',
          pointStatus: 'PLANNED',
          pointStatusClass: 'classGreyStatus',
        },
      ],
    },
    {
      title: 'Cameras',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Configure',
      // linkToButton: '',
      list: [
        {
          pointTitle: 'RTSP/ONVIF',
          pointDescription: 'Compatibility with most cameras',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'ANPR/LPR',
          pointDescription: 'Number plate recognition',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'Norm-hour timer',
          pointDescription: 'Actual cost of a norm-hour',
          pointStatus: 'LIVE',
        },
      ],
    },
    {
      title: 'API',
      mainStatus: 'Link',
      tags: ['API', 'OAuth', 'Webhook'],
      // buttonText: 'Details',
      // linkToButton: 'https://mech.APi',
      list: [
        {
          pointTitle: 'EDRTZ database',
          pointDescription: 'Unified State Register of Vehicles.',
          pointStatus: 'LIVE',
        },
        {
          pointTitle: 'IP telephony',
          pointDescription: 'Call recording linked to the client',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Chat with client',
          pointDescription: 'Messaging from all messengers',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
        {
          pointTitle: 'Vchasno. Cash register',
          pointDescription: 'Using PRRO',
          pointStatus: 'BETA',
          pointStatusClass: 'classBlueStatus',
        },
      ],
    },
  ];

  return (
    <div className={styles.textContentForTwoBlock}>
      <h3 className={styles.textContentForTwoBlockTitle}>Integrations</h3>

      <p className={styles.textContentForTwoBlockDescription}>
        Suppliers, payments, cameras — connection without problems.
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
