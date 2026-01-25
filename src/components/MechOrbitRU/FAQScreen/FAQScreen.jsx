import { useState } from 'react';
import styles from './FAQScreen.module.scss';
import clsx from 'clsx';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

export default function FAQScreen() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Могу ли я протестировать систему бесплатно?',
      answer:
        'Да, мы предоставляем 14 дней бесплатного тестирования программного обеспечения. Это ключевая часть нашего `Тестового пути`, где вы можете на собственном оборудовании или с нашей TestCam оценить все преимущества системы, прежде чем принимать решение о покупке.',
    },
    {
      question: 'Могу ли я подключить свои старые камеры?',
      answer:
        'Да, если ваши камеры поддерживают стандартный протокол передачи видео (RTSP). Бесплатный тестовый период идеально подходит, чтобы быстро и бесплатно это проверить. Однако важно понимать, что качество и стабильность работы всей системы напрямую зависит от оборудования.',
    },
    {
      question: 'Почему вы рекомендуете покупать новое, проверенное оборудование?',
      answer:
        'Потому что наша цель – дать вам четкие данные и гарантированный результат, а не просто "как-то подключить". Вот 4 ключевые причины:',
      list: {
        pointOne:
          'Правильное расположение: Ваши существующие камеры, скорее всего, установлены для общего надзора. Для аналитики MECHorbit требуется четкий ракурс на каждый рабочий пост. Перемещение старых камер – это те же затраты на монтаж, но без гарантии качества.',
        pointTwo:
          'Технические ограничения: Большинство старых систем (особенно видеорегистраторы) созданы как "черный ящик" и блокируют передачу стабильного видеопотока в сторонние программы, как наша. Это делает интеграцию ненадежной.',
        pointThree:
          'Точность аналитики: Современные камеры, которые мы предлагаем, гарантируют высокую точность распознавания номеров (LPR) и фиксацию событий даже в сложных условиях (ночью, под углом). Это критически для корректной работы системы.',
        pointFour:
          'Гарантия надежности Мы протестировали десятки моделей и гарантируем безупречную работу системы только с проверенным и рекомендованным нами оборудованием.',
      },
    },
    {
      question: 'Ладно, камеры нужно покупать. Они входят в аренду?',
      answer:
        'Оборудование (камеры) вы приобретаете один раз – оно становится вашей собственностью. Ежемесячная плата — это подписка на программное обеспечение (SaaS), которое оживляет эти камеры, предоставляет аналитику, CRM и все другие возможности экосистемы. Такой подход более выгоден для вас в долгосрочной перспективе.',
    },
    {
      question: 'Как трудно начать пользоваться системой?',
      answer:
        'Для `Тестового пути` все очень просто. Для `Полного подключения` базовая настройка и обучение занимает несколько дней. Первые реальные результаты и аналитику вы увидите уже через неделю.',
    },
    {
      question: 'У меня уже есть CRM. Чем MECHorbit лучше?',
      answer:
        'Стандартные CRM – это только система учета. MECHorbit – это единственный организм, объединяющий реальный мир (камеры) с цифровым (CRM, приложения). Мы автоматизируем процессы, которые другие системы не видят: фиксируем реальное время работы, устраняем человеческий фактор, ускоряем согласование с клиентом. Это переход от обычного учета к активному управлению прибылью.',
    },
    {
      question: 'Что, если я хочу изменить тариф или отменить подписку?',
      answer:
        'Да, вы полностью контролируете свою подписку. Вы можете изменить тарифный план в любое время, повысив или снизив его. Отмена подписки также возможна согласно условиям договора. Мы работаем прозрачно.',
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
            Частые <span>вопросы</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Мы уже слышали эти вопросы от владельцев СТО, поэтому отвечаем на них до того, как вы
            позвоните.
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
