import { useState } from 'react';
import styles from './Calculator.module.scss';
import {
  BsArrowRightShort,
  BsCameraVideo,
  BsCreditCard2Back,
  BsGearFill,
  BsReceiptCutoff,
  BsShopWindow,
} from 'react-icons/bs';
import clsx from 'clsx';
import InvoiceModal from './InvoiceModal/InvoiceModal';

// Список типов объектов (строки калькулятора)
const PRODUCT_ROWS = [
  {
    icon: <BsShopWindow className={styles.calcIcon} />,
    name: 'Приміщень',
    key: 'rooms',
    defaultQty: 3,
    defaultEnabledOptions: ['12mp', 'install'],
  },
  {
    icon: <BsGearFill className={styles.calcIcon} />,
    name: 'Постів',
    key: 'posts',
    defaultQty: 12,
    defaultEnabledOptions: ['5mp', 'install'],
  },
  {
    icon: <BsCameraVideo className={styles.calcIcon} />,
    name: 'Заїзд',
    key: 'entry',
    defaultQty: 1,
    defaultEnabledOptions: ['5mp', 'install'],
  },
  {
    icon: <BsCameraVideo className={styles.calcIcon} />,
    name: 'Парковка',
    key: 'parking',
    defaultQty: 1,
    defaultEnabledOptions: ['12mp', 'install'],
  },
  {
    icon: <BsCameraVideo className={styles.calcIcon} />,
    name: 'Інше',
    key: 'other',
    defaultQty: 1,
    defaultEnabledOptions: [],
  },
];

// Опции-переключатели (колонки)
const CAMERA_OPTIONS = [
  { key: '5mp', label: '5 МП, Wi-Fi', price: 2450 },
  { key: '8mp', label: '8 МП, Wi-Fi', price: 4850 },
  { key: '12mp', label: '12 МП, Lan', price: 4950 },
  { key: 'install', label: 'Монтаж', price: 1000 },
];

export default function Calculator({ scrollToSection }) {
  // rows → calculatorRows
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [calculatorRows, setCalculatorRows] = useState(
    PRODUCT_ROWS.map((product) => ({
      key: product.key,
      name: product.name,
      icon: product.icon,
      quantity: product.defaultQty ?? 0,

      // toggles → enabledOptions
      enabledOptions: Object.fromEntries(
        CAMERA_OPTIONS.map((option) => [
          option.key,
          product.defaultEnabledOptions.includes(option.key),
        ]),
      ),
    })),
  );

  /**
   * Переключение тумблера опции
   */
  const toggleOption = (rowKey, optionKey) => {
    setCalculatorRows((currentRows) =>
      currentRows.map((productRow) => {
        if (productRow.key !== rowKey) return productRow;

        const isCurrentlyEnabled = productRow.enabledOptions[optionKey];
        const willBeEnabled = !isCurrentlyEnabled;

        let updatedQuantity = productRow.quantity;

        // если включаем опцию и qty = 0 или пусто → ставим 1
        if (willBeEnabled && (!updatedQuantity || updatedQuantity === 0)) {
          updatedQuantity = 1;
        }

        return {
          ...productRow,
          quantity: updatedQuantity,
          enabledOptions: {
            ...productRow.enabledOptions,
            [optionKey]: willBeEnabled,
          },
        };
      }),
    );
  };

  /**
   * Изменение количества (с ограничением 0-30)
   */
  const changeQuantity = (rowKey, inputValue) => {
    setCalculatorRows((currentRows) =>
      currentRows.map((productRow) => {
        if (productRow.key !== rowKey) return productRow;

        // Разрешаем временно пустое поле при вводе
        if (inputValue === '') {
          return { ...productRow, quantity: '' };
        }

        let numericValue = Number(inputValue);

        if (isNaN(numericValue)) numericValue = 0;

        // ограничение 0 — 30
        numericValue = Math.max(0, Math.min(30, numericValue));

        return { ...productRow, quantity: numericValue };
      }),
    );
  };

  /**
   * Подсчёт общей суммы
   */
  const totalCost = calculatorRows.reduce((sum, productRow) => {
    CAMERA_OPTIONS.forEach((option) => {
      if (productRow.enabledOptions[option.key]) {
        sum += option.price * productRow.quantity;
      }
    });

    return sum;
  }, 0);

  return (
    <div className={styles.calc}>
      <h3 className={styles.title}>Інвестиції у ваш автосервіс</h3>

      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.name}></div>
          <div className={styles.qty}>
            <p>К-сть</p>
          </div>
          {CAMERA_OPTIONS.map((option) => (
            <div key={option.key} className={styles.option}>
              <p className={styles.optionLabel}>{option.label}</p>
              <p className={styles.optionPrice}>₴ {option.price}</p>
            </div>
          ))}
        </div>

        {calculatorRows.map((productRow, index) => (
          <div key={productRow.key} className={styles.row}>
            <div className={styles.name}>
              {productRow.icon}
              {productRow.name} {index >= 2 && <span> *</span>}
            </div>

            <div className={styles.qty}>
              <input
                type='number'
                min='0'
                max='100'
                value={productRow.quantity}
                onChange={(e) => changeQuantity(productRow.key, e.target.value)}
              />
            </div>

            {CAMERA_OPTIONS.map((option) => (
              <div key={option.key} className={styles.option}>
                <label className={styles.switch}>
                  <input
                    type='checkbox'
                    checked={productRow.enabledOptions[option.key]}
                    onChange={() => toggleOption(productRow.key, option.key)}
                  />
                  <span className={styles.slider} />
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.tablePhone}>
        <div className={styles.tableInputPointsPhoneRow}>
          <div className={styles.tableInputPointsPhone}>
            <div className={styles.tableNamePhoneRow}>
              {calculatorRows.map((productRow, index) => (
                <div key={productRow.key} className={styles.qtyPhoneBlock}>
                  <p className={styles.name}>
                    {productRow.name} {index >= 2 && <span> *</span>}
                  </p>
                  <input
                    type='number'
                    min='0'
                    max='100'
                    value={productRow.quantity}
                    onChange={(e) => changeQuantity(productRow.key, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.tableRowHeaderPhone}>
          {CAMERA_OPTIONS.map((option) => (
            <div key={option.key} className={styles.option}>
              <p className={styles.optionLabel}>{option.label}</p>
              <p className={styles.optionPrice}>₴ {option.price}</p>
            </div>
          ))}
        </div>

        {calculatorRows.map((productRow) => (
          <div key={productRow.key} className={styles.rowPhone}>
            {CAMERA_OPTIONS.map((option) => (
              <div key={option.key} className={styles.option}>
                <label className={styles.switch}>
                  <input
                    type='checkbox'
                    checked={productRow.enabledOptions[option.key]}
                    onChange={() => toggleOption(productRow.key, option.key)}
                  />
                  <span className={styles.slider} />
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.total}>₴ {totalCost.toLocaleString('uk-UA')}</div>

      <div className={styles.buttonsBlock}>
        <a className={styles.buttonTest} onClick={() => scrollToSection('contacts')}>
          Консультація <BsArrowRightShort className={styles.buttonIcon} />
        </a>

        <a
          className={clsx(styles.buttonTest, styles.buttonPayment)}
          onClick={() => setIsInvoiceModalOpen(true)}>
          <BsReceiptCutoff className={styles.buttonIcon} />
          Рахунок
        </a>

        <a href='#' target='_blank' className={clsx(styles.buttonTest, styles.buttonPay)}>
          <BsCreditCard2Back className={styles.buttonIcon} />
          Оплатити
        </a>
      </div>

      <div className={styles.textBottomCalcBlock}>
        <p className={styles.textBottomCalc}>
          <span>*</span> загальні камери — для контролю ситуації та огляду території, без
          розпізнавання номерів
        </p>
      </div>

      <InvoiceModal
        isOpen={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
        totalCost={totalCost}
      />
    </div>
  );
}
