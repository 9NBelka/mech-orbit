import { useState } from 'react';
import styles from './FAQScreen.module.scss';
import clsx from 'clsx';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

export default function FAQScreen() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Чи можу я протестувати систему безкоштовно?',
      answer:
        'Так, ми надаємо 14 днів безкоштовного тестування програмного забезпечення. Це ключова частина нашого `Тестового шляху`, де ви можете на власному обладнанні або з нашою TestCam оцінити всі переваги системи, перш ніж приймати рішення про покупку.',
    },
    {
      question: 'Чи можу я підключити свої старі камери?',
      answer:
        'Так, якщо ваші камери підтримують стандартний протокол передачі відео (RTSP). Безкоштовний тестовий період якраз ідеально підходить, щоб швидко та безкоштовно це перевірити. Проте, важливо розуміти, що якість та стабільність роботи всієї системи напряму залежить від обладнання.',
    },
    {
      question: 'Чому тоді ви рекомендуєте купувати нове, перевірене обладнання?',
      answer:
        'Тому що наша мета — дати вам чіткі дані та гарантований результат, а не просто `якось підключити`. Ось 4 ключові причини:',
      list: {
        pointOne:
          'Правильне розташування: Ваші існуючі камери, скоріш за все, встановлені для загального нагляду. Для аналітики MECHorbit потрібен чіткий ракурс на кожен робочий пост. Переміщення старих камер — це ті ж самі витрати на монтаж, але без гарантії якості.',
        pointTwo:
          'Технічні обмеження: Більшість старих систем (особливо відеореєстратори) створені як `чорна скринька` і блокують передачу стабільного відеопотоку в сторонні програми, як наша. Це робить інтеграцію ненадійною.',
        pointThree:
          'Точність аналітики: Сучасні камери, які ми пропонуємо, гарантують високу точність розпізнавання номерів (LPR) та фіксації подій навіть у складних умовах (вночі, під кутом). Це критично для коректної роботи системи.',
        pointFour:
          'Гарантія надійності: Ми протестували десятки моделей і гарантуємо бездоганну роботу системи лише з перевіреним та рекомендованим нами обладнанням.',
      },
    },
    {
      question: 'Добре, камери потрібно купувати. Вони входять в оренду?',
      answer:
        'Обладнання (камери) ви купуєте один раз — воно стає вашою власністю. Щомісячна плата — це підписка на програмне забезпечення (SaaS), яке `оживляє` ці камери, надає аналітику, CRM та всі інші можливості екосистеми. Такий підхід вигідніший для вас у довгостроковій перспективі.',
    },
    {
      question: 'Наскільки складно почати користуватися системою?',
      answer:
        'Для `Тестового шляху` все максимально просто. Для `Повного підключення` базове налаштування та навчання займає кілька днів. Перші реальні результати та аналітику ви побачите вже за тиждень.',
    },
    {
      question: 'У мене вже є CRM. Чим MECHorbit кращий?',
      answer:
        "Стандартні CRM — це лише система обліку. MECHorbit — це єдиний організм, що об'єднує реальний світ (камери) з цифровим (CRM, додатки). Ми автоматизуємо процеси, які інші системи не бачать: фіксуємо реальний час роботи, усуваємо людський фактор, прискорюємо погодження з клієнтом. Це перехід від простого обліку до активного управління прибутком.",
    },
    {
      question: 'Що, якщо я захочу змінити тариф або скасувати підписку?',
      answer:
        'Так, ви повністю контролюєте свою підписку. Ви можете змінити тарифний план у будь-який час, підвищивши або знизивши його. Скасування підписки також можливе згідно з умовами договору. Ми працюємо прозоро.',
    },
  ];

  return (
    <section className={styles.faqScreen} id='faq'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>FAQ</p>
          </div>
          <h3 className={styles.titleScreen}>
            Часті <span>питання</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Ми вже чули ці питання від власників СТО, тому відповідаємо на них до того, як ви
            зателефонуєте.
          </p>
        </div>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div className={styles.accordionItem} key={index}>
              <button
                className={clsx(
                  styles.accordionButton,
                  activeIndex === index && styles.accordionButtonActive,
                )}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                <span> {faq.question}</span>
                {activeIndex === index ? (
                  <BsChevronUp className={styles.accordionIcon} />
                ) : (
                  <BsChevronDown className={styles.accordionIcon} />
                )}
              </button>
              <div
                className={clsx(styles.accordionContent, activeIndex === index && styles.active)}>
                <p className={styles.answerText}>{faq.answer}</p>

                {/* Вывод списка, если он есть */}
                {faq.list && (
                  <ul className={styles.faqList}>
                    <li>{faq.list.pointOne}</li>
                    <li>{faq.list.pointTwo}</li>
                    <li>{faq.list.pointThree}</li>
                    <li>{faq.list.pointFour}</li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.bluePrintTwo)}></div>
    </section>
  );
}
