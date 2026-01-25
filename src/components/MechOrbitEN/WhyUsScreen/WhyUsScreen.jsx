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
      title: 'Vehicle Intake',
      description: 'Condition assessment, photos, customer complaints, mileage',
      classForColor: 'classForColorBlue',
    },
    {
      title: 'Diagnostics',
      description: 'Checklist, spare parts, labor intensity, preliminary estimate',
      classForColor: 'classForColorPurple',
    },
    {
      title: 'Commercial Offer',
      description: 'Final estimate including labor and spare parts',
      classForColor: 'classForColorLightOrange',
    },
    {
      title: 'Automatic Approval',
      description: 'The customer receives photos, a list of works, and an *Approve* button',
      classForColor: 'classForColorOrange',
    },
    {
      title: 'Spare Parts Ordering',
      description: 'Integration with suppliers, margin control',
      classForColor: 'classForColorGreen',
    },
    {
      title: 'Execution Control',
      description: 'Actual labor hours, downtime, work progress per vehicle',
      classForColor: 'classForColorLightBlue',
    },
    {
      title: 'Photo / Video Documentation',
      description: 'Proof for the customer and protection against disputes',
      classForColor: 'classForColorPink',
    },
    {
      title: 'Payment and Vehicle Handover',
      description: 'Job closure and recommendations for the future',
      classForColor: 'classForColorYellow',
    },
  ];

  return (
    <section className={styles.whyUs} id='solution'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            Transparency<span> of all</span> actions
          </h3>
          <div className={styles.borderLine}></div>
          <h5 className={styles.titleForDescription}>One process — from diagnostics to payment</h5>
          <p className={styles.textDescription}>
            All under Orbit control. The owner sees the big picture, the manager controls the
            process, and technicians simply do their job.
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
              <span>One process</span> from diagnostics to payment — everything under control
            </h6>
          </div>
        </div>
      </div>

      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.bluePrintTwo)}></div>
    </section>
  );
}
