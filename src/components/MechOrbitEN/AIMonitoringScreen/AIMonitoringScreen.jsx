import { IoMdCheckmark } from 'react-icons/io';
import styles from './AIMonitoringScreen.module.scss';
import Calculator from './Calculator/Calculator';
import clsx from 'clsx';
import { BsArrowRightShort } from 'react-icons/bs';

export default function AIMonitoringScreen({ scrollToSection }) {
  const listText = [
    {
      title: 'The camera must be installed in front of the car to clearly see the license plate.',
    },
    {
      title: 'The distance from the car should be at least 1.5 meters.',
    },
    {
      title: 'The installation height should be approximately 2 meters from the floor.',
    },
    {
      title:
        'The more directly the camera is aimed at the license plate, the better the data quality for AI analysis.',
    },
  ];

  return (
    <section className={styles.aIMonitoring} id='calculator'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            <span className={styles.gradientText}>AI Monitoring:</span> camera calculation for your
            car service
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
                  Main recommendation:
                  <span>
                    {' '}
                    one camera in front of the car for each bay, plus one overview camera for the
                    entire room. This way, the system can see the license plate, movement, and idle
                    time.
                  </span>
                </h6>
              </div>
            </div>

            <h3 className={styles.textBlockTitle}>
              How to correctly install cameras for AI monitoring
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
                  All equipment
                  <span> is supplied with a manufacturer warranty for 24 months.</span>
                </h6>
              </div>
            </div>
            <div className={styles.buttonsBlock}>
              <a className={styles.buttonTest} onClick={() => scrollToSection('contacts')}>
                Consultation <BsArrowRightShort className={styles.buttonIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
