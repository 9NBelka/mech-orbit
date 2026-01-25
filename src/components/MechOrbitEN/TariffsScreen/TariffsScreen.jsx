import React, { useState } from 'react';
import styles from './TariffsScreen.module.scss';
import clsx from 'clsx';
import { LuCircleCheckBig, LuDatabase } from 'react-icons/lu';
import { GoGraph } from 'react-icons/go';
import { BsShopWindow } from 'react-icons/bs';
import Tariffs from './Tariffs/Tariffs';
import TryToStartScreen from './TryToStartScreen/TryToStartScreen';
import TariffsTabletAndMobile from './TariffsTabletAndMobile/TariffsTabletAndMobile';

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
          <h3 className={styles.titleScreen}>Tariffs</h3>

          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            All inclusive: cameras, CRM, apps, support. Free trial: 14 days, no card required.
          </p>

          <div className={styles.descriptionAndButtonChangeBlock}>
            <p className={styles.descriptionChangeBlock}>Monthly</p>

            <div
              className={clsx(styles.toggleSwitch, isOn ? 'on' : 'off')}
              onClick={() => setIsOn(!isOn)}>
              <div className={styles.toggleCircle} />
            </div>
            <p className={styles.descriptionChangeBlock}>Yearly</p>

            <div className={styles.discountGradientBlock}>
              <p className={clsx(styles.textDiscount, isOn && styles.textDiscounON)}>
                20% discount
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.containerForTariffs, styles.tariffsPc)}>
        <Tariffs isOn={isOn} getDisplayPrice={getDisplayPrice} />
      </div>
      <div className={clsx(styles.containerForTariffs, styles.tariffsTabletAndPhone)}>
        <TariffsTabletAndMobile isOn={isOn} getDisplayPrice={getDisplayPrice} />
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
