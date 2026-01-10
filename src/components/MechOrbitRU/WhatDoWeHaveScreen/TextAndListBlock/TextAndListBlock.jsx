import React from 'react';
import styles from './TextAndListBlock.module.scss';
import clsx from 'clsx';
import { FaCog, FaStethoscope, FaWrench } from 'react-icons/fa';
import { LuBrain, LuCircleCheckBig, LuFactory, LuLink, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoDotFill, GoPulse } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { BsArrowRightShort, BsBoxSeam, BsDiagram2, BsPhone } from 'react-icons/bs';
import { PiGlobeSimple } from 'react-icons/pi';
import { RxLightningBolt } from 'react-icons/rx';
import { BiBullseye } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';

export default function TextAndListBlock() {
  const listText = [
    {
      title: 'Понимает, когда автомобиль бездействует',
    },
    {
      title: 'Видит, сколько времени на самом деле занимает каждый тип работы',
    },
    {
      title: 'Регистрирует стандартные нарушения и подозрительные ситуации',
    },
    {
      title: 'Предоставляет реальные данные для обсуждений с техниками, а не эмоции.',
    },
  ];

  return (
    <div className={styles.textAndListMainBlock}>
      <div className={styles.textAndListBlock}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>
            Искусственный интеллект видит то, что владелец не видит.
          </h3>
          <p className={styles.textBlockDescription}>
            Система Vision подключается к камерам в боксах и автоматически записывает время простоя,
            загрузки и выполнения работ для каждого автомобиля.
          </p>
        </div>

        <div className={styles.descriptionBlock}>
          {listText.map((textList, index) => (
            <div key={index} className={styles.descriptionAndIconBlock}>
              <IoMdCheckmark className={styles.checkmarkIcon} />
              <p className={styles.description}>{textList.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.blockBottomScreen}>
        <div className={styles.conclusionBlock}>
          <div className={styles.borderLineVertical}></div>
          <h6 className={styles.conclusionText}>
            Нет необходимости контролировать людей - <span>система контролирует процесс.</span>
          </h6>
        </div>
      </div>

      <div className={styles.blockWithTextBottomScreen}>
        <p>
          Хотите узнать, сколько стоит внедрение видео-ИИ специально для вашей сервисной станции?
          Ниже приведен расчет для камер.
        </p>
      </div>
    </div>
  );
}
