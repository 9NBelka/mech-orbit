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
      title: 'Розуміє, коли автомобіль простоює',
    },
    {
      title: 'Бачить, скільки часу насправді займає кожен тип робіт',
    },
    {
      title: 'Фіксує стандартні порушення та підозрілі ситуації',
    },
    {
      title: 'Надає реальні дані для обговорень з техніками, а не емоції.',
    },
  ];

  return (
    <div className={styles.textAndListMainBlock}>
      <div className={styles.textAndListBlock}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>
            Штучний інтелект бачить те, чого власник не бачить.
          </h3>
          <p className={styles.textBlockDescription}>
            Система Vision підключається до камер у боксах і автоматично фіксує час простою,
            завантаження та виконання робіт для кожного автомобіля.
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
            Немає потреби контролювати людей — <span>система контролює процес.</span>
          </h6>
        </div>
      </div>

      <div className={styles.blockWithTextBottomScreen}>
        <p>
          Хочете дізнатися, скільки коштує впровадження відео-ШІ спеціально для вашої сервісної
          станції? Нижче наведено розрахунок для камер.
        </p>
      </div>
    </div>
  );
}
