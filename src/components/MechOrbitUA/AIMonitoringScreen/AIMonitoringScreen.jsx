import { IoMdCheckmark } from 'react-icons/io';
import styles from './AIMonitoringScreen.module.scss';
import Calculator from './Calculator/Calculator';
import clsx from 'clsx';
import { BsArrowRightShort } from 'react-icons/bs';

export default function AIMonitoringScreen({ scrollToSection }) {
  const listText = [
    {
      title: 'Камера має бути встановлена спереду автомобіля, щоб чітко бачити номерний знак.',
    },
    {
      title: 'Відстань від автомобіля — не менше 1,5 метра.',
    },
    {
      title: 'Висота встановлення — приблизно 2 метри від підлоги.',
    },
    {
      title:
        'Чим пряміше камера спрямована на номерний знак, тим краща якість даних для аналізу ШІ.',
    },
  ];

  return (
    <section className={styles.aIMonitoring} id='calculator'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            <span className={styles.gradientText}>Моніторинг ШІ:</span> розрахунок камери для вашого
            автосервісу
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
                  Основна рекомендація:
                  <span>
                    {' '}
                    одна камера спереду автомобіля для кожного поста, плюс одна оглядова камера для
                    всього приміщення. Таким чином система зможе бачити номер, рух і час простою.
                  </span>
                </h6>
              </div>
            </div>

            <h3 className={styles.textBlockTitle}>
              Як правильно встановити камери для моніторингу за допомогою ШІ
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
                  Усе обладнання
                  <span> постачається з гарантією виробника на 24 місяці.</span>
                </h6>
              </div>
            </div>
            <div className={styles.buttonsBlock}>
              <a className={styles.buttonTest} onClick={() => scrollToSection('contacts')}>
                Консультація <BsArrowRightShort className={styles.buttonIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
