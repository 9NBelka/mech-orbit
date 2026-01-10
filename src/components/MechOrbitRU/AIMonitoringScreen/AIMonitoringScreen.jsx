import { IoMdCheckmark } from 'react-icons/io';
import styles from './AIMonitoringScreen.module.scss';
import Calculator from './Calculator/Calculator';
import clsx from 'clsx';
import { BsArrowRightShort } from 'react-icons/bs';

export default function AIMonitoringScreen({ scrollToSection }) {
  const listText = [
    {
      title: 'Камера должна быть установлена спереди автомобиля, чтобы четко видеть номерной знак.',
    },
    {
      title: 'Расстояние от автомобиля - не менее 1,5 метра.',
    },
    {
      title: 'Высота установки - примерно 2 метра от пола.',
    },
    {
      title:
        'Чем прямее камера смотрит на номерной знак, тем лучше качество данных для анализа ИИ.',
    },
  ];

  return (
    <section className={styles.aIMonitoring} id='calculator'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            <span className={styles.gradientText}>Мониторинг ИИ:</span> расчет камеры для вашей
            сервисной станции
          </h3>
          <div className={styles.borderLine}></div>
        </div>
        <div className={styles.calculatorAndTextBlock}>
          <div className={styles.calculatorBlock}>
            <Calculator scrollToSection={scrollToSection} />
          </div>
          <div className={styles.textBlock}>
            <div className={styles.blockTopScreen}>
              <div className={styles.conclusionBlock}>
                <div className={styles.borderLineVertical}></div>
                <h6 className={styles.conclusionText}>
                  Основная рекомендация:
                  <span>
                    {' '}
                    одна камера спереди автомобиля для каждого поста, плюс одна обзорная камера в
                    кузове. Таким образом, система сможет видеть номер, движение и время простоя.
                  </span>
                </h6>
              </div>
            </div>

            <h3 className={styles.textBlockTitle}>
              Как правильно установить камеры для мониторинга с помощью ИИ
            </h3>
            <div className={styles.descriptionBlock}>
              {listText.map((textList, index) => (
                <div key={index} className={styles.descriptionAndIconBlock}>
                  <IoMdCheckmark className={styles.checkmarkIcon} />
                  <p className={styles.description}>{textList.title}</p>
                </div>
              ))}
            </div>

            <div className={clsx(styles.blockTopScreen, styles.blockBottomScreen)}>
              <div className={styles.conclusionBlock}>
                <div className={styles.borderLineVertical}></div>
                <h6 className={styles.conclusionText}>
                  Все оборудование
                  <span> поставляется с гарантией производителя на 24 месяца.</span>
                </h6>
              </div>
            </div>
            <div className={styles.buttonsBlock}>
              <a className={styles.buttonTest} onClick={() => scrollToSection('contacts')}>
                Консультация <BsArrowRightShort className={styles.buttonIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
