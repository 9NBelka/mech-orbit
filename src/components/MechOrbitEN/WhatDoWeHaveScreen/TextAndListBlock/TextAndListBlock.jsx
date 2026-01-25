import React from 'react';
import styles from './TextAndListBlock.module.scss';
import clsx from 'clsx';
import { IoMdCheckmark } from 'react-icons/io';

export default function TextAndListBlock() {
  const listText = [
    {
      title: 'Understands when a vehicle is idle',
    },
    {
      title: 'Sees how much time each type of work actually takes',
    },
    {
      title: 'Detects standard violations and suspicious situations',
    },
    {
      title: 'Provides real data for discussions with technicians, not emotions.',
    },
  ];

  return (
    <div className={styles.textAndListMainBlock}>
      <div className={styles.textAndListBlock}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>
            Artificial intelligence sees what the owner does not.
          </h3>
          <p className={styles.textBlockDescription}>
            The Vision system connects to cameras in service bays and automatically records
            downtime, workload, and job execution time for each vehicle.
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
            No need to control people — <span>the system controls the process.</span>
          </h6>
        </div>
      </div>

      <div className={styles.blockWithTextBottomScreen}>
        <p>
          Want to know how much it costs to implement video AI specifically for your service
          station? Below is a camera-based calculation.
        </p>
      </div>
    </div>
  );
}
