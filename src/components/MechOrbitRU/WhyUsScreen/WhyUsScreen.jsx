import React from 'react';
import styles from './WhyUsScreen.module.scss';
import clsx from 'clsx';
import { FaCog, FaStethoscope, FaWrench } from 'react-icons/fa';
import { LuBrain, LuCircleCheckBig, LuFactory, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { BsArrowRightShort } from 'react-icons/bs';

export default function WhyUsScreen() {
  const whyUsText = [
    {
      title: 'Прием автомобиля',
      description: 'Оценка состояния, фотографии, жалобы клиентов, пробег',
      classForColor: 'classForColorBlue',
    },
    {
      title: 'Диагностика',
      description: 'Чек-лист, запасные части, трудоемкость, предварительная смета',
      classForColor: 'classForColorPurple',
    },
    {
      title: 'Коммерческое предложение',
      description: 'Окончательная смета с работами и запасными частями',
      classForColor: 'classForColorLightOrange',
    },
    {
      title: 'Автоматическое одобрение',
      description: 'Клиент получает фотографии, список работ и кнопку *Согласен*',
      classForColor: 'classForColorOrange',
    },
    {
      title: 'Заказ запасных частей',
      description: 'Интеграция с поставщиками, контроль маржи',
      classForColor: 'classForColorGreen',
    },
    {
      title: 'Контроль выполнения',
      description: 'Фактические человеко-часы, простои, ход работ по автомобилю',
      classForColor: 'classForColorLightBlue',
    },
    {
      title: 'Фото/видео документация',
      description: 'Доказательства для клиента и защита от конфликтов',
      classForColor: 'classForColorPink',
    },
    {
      title: 'Оплата и передача автомобиля',
      description: 'Закрытие работ, рекомендации на будущее',
      classForColor: 'classForColorYellow',
    },
  ];

  return (
    <section className={styles.whyUs} id='solution'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Прозрачность<span> всех</span> действий
          </h3>
          <div className={styles.borderLine}></div>
          <h5 className={styles.titleForDescription}>Один процесс — от диагностики до оплаты</h5>
          <p className={styles.textDescription}>
            Под контролем Orbit. Владелец видит общую картину, менеджер контролирует процесс, а
            мастера просто выполняют работу.
          </p>
        </div>
        <div className={styles.cardsInfo}>
          {whyUsText.map((info, index) => (
            <div className={clsx(styles.cardInfo, styles[info.classForColor])} key={index}>
              <div className={styles.numberAndTitleBlock}>
                <div className={clsx(styles.numberCardBlock, styles[info.classForColor])}>
                  <h4 className={clsx(styles.numberCardText, styles[info.classForColor])}>
                    0{index + 1}
                  </h4>
                </div>
                <h3 className={styles.cardInfoTitle}>{info.title}</h3>
              </div>
              <p className={styles.cardDescription}>{info.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.blockBottomScreen}>
          <div className={styles.conclusionBlock}>
            <LuCircleCheckBig className={styles.iconCheck} />
            <h6 className={styles.conclusionText}>
              <span>Один процесс</span> от диагностики до оплаты - всё под контролем
            </h6>
          </div>
        </div>
      </div>

      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.bluePrintTwo)}></div>
    </section>
  );
}
