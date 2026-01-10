import React, { useState } from 'react';
import styles from './TariffsScreen.module.scss';
import clsx from 'clsx';
import { LuCircleCheckBig, LuDatabase } from 'react-icons/lu';
import { GoGraph } from 'react-icons/go';
import { BsShopWindow } from 'react-icons/bs';
import Tariffs from './Tariffs/Tariffs';
import TryToStartScreen from './TryToStartScreen/TryToStartScreen';

export default function TariffsScreen() {
  const [isOn, setIsOn] = useState(false);

  const formatPrice = (value) => new Intl.NumberFormat('uk-UA').format(value);

  const getDisplayPrice = (basePrice) => {
    if (!isOn) return formatPrice(basePrice);

    const discounted = Math.round(basePrice * 0.8);

    return formatPrice(discounted);
  };

  return (
    <section className={styles.tariffsMain} id='price'>
      <TryToStartScreen isOn={isOn} getDisplayPrice={getDisplayPrice} />
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>Тарифи</h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Все включено: камери, CRM, додатки, підтримка. Безкоштовний тест: 14 днів, без картки.
          </p>
          <div className={styles.descriptionAndButtonChangeBlock}>
            <p className={styles.descriptionChangeBlock}>Раз на місяць</p>
            <div
              className={clsx(styles.toggleSwitch, isOn ? 'on' : 'off')}
              onClick={() => setIsOn(!isOn)}>
              <div className={styles.toggleCircle} />
            </div>
            <p className={styles.descriptionChangeBlock}>за рік</p>
            <div className={styles.discountGradientBlock}>
              <p className={clsx(styles.textDiscount, isOn && styles.textDiscounON)}>20% знижка</p>
            </div>
          </div>
        </div>
      </div>
      <Tariffs isOn={isOn} getDisplayPrice={getDisplayPrice} />
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
