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
      mainStatus: '1 service station',
      mainStatusIcon: <BsFillHouseFill className={styles.badgeIndicator} />,
      price: 0,
      tags: [' iOS/', 'Android'],
      buttonText: 'Try',
      list: [
        {
          pointTitle: 'AI-video',
          greyColor: true,
        },
        {
          pointTitle: 'CRM / Accounting / Warehouses',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Integration - suppliers',
          pointStatus: '3',
          pointIcon: <BsPuzzleFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Mechanic app',
          pointStatus: '2',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Client app',
          pointStatus: '∞',
          pointIcon: <BsPersonFill className={styles.pointListBadgeIndicator} />,
        },
        {
          pointTitle: 'Analytics',
        },
        {
          pointTitle: 'WEB extension',
          greyColor: true,
        },
      ],
    },
  ];

  const infoList = [
    {
      point: 'No card binding or automatic charges',
    },
    {
      point: 'Full functionality for full operation',
    },
    {
      point: 'Personal consultation for setup',
    },
    {
      point: 'Access to AI analytics and all key modules.',
    },
  ];
  return (
    <section className={styles.tryToStartScreen} id='tryToStart'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Try <span>Start</span> for free
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>Free trial: 14 days, no card required.</p>
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
                    <p className={styles.textLater}>soon</p>
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
                🚀 Try 14 days for 0 UAH
                <MdOutlineKeyboardArrowRight className={styles.buttonIcon} />
              </LangLink>
              <LangLink
                to={'/register'}
                target='_blank'
                className={clsx(styles.infoButton, styles.infoButtonPhone)}>
                Login
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
