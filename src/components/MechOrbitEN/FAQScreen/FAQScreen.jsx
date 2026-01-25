import { useState } from 'react';
import styles from './FAQScreen.module.scss';
import clsx from 'clsx';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

export default function FAQScreen() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I try the system for free?',
      answer:
        'Yes, we provide a 14-day free trial of the software. This is a key part of our “Trial Journey”, where you can evaluate all the benefits of the system on your own equipment or using our TestCam before making a purchase decision.',
    },
    {
      question: 'Can I connect my existing cameras?',
      answer:
        'Yes, if your cameras support the standard video streaming protocol (RTSP). The free trial period is ideal for quickly and safely testing this. However, it is important to understand that the quality and stability of the entire system directly depend on the equipment.',
    },
    {
      question: 'Why do you recommend purchasing new, certified equipment then?',
      answer:
        'Because our goal is to provide you with clear data and guaranteed results, not just to “somehow connect” the system. Here are 4 key reasons:',
      list: {
        pointOne:
          'Proper positioning: Your existing cameras are most likely installed for general surveillance. MECHorbit analytics require a precise angle for each workstation. Relocating old cameras results in the same installation costs, but without quality guarantees.',
        pointTwo:
          'Technical limitations: Most legacy systems (especially DVRs) are designed as a “black box” and block stable video streaming to third-party applications like ours. This makes integration unreliable.',
        pointThree:
          'Analytics accuracy: The modern cameras we offer ensure high accuracy in license plate recognition (LPR) and event detection, even in challenging conditions (nighttime, angled views). This is critical for proper system performance.',
        pointFour:
          'Reliability guarantee: We have tested dozens of models and guarantee flawless system performance only with the equipment we recommend and certify.',
      },
    },
    {
      question: 'Okay, cameras need to be purchased. Are they included in the subscription?',
      answer:
        'You purchase the equipment (cameras) once — it becomes your property. The monthly fee is a subscription for the software (SaaS) that “brings these cameras to life”, providing analytics, CRM, and all other ecosystem features. This approach is more cost-effective for you in the long term.',
    },
    {
      question: 'How difficult is it to start using the system?',
      answer:
        'For the “Trial Journey”, everything is максимально simple. For the “Full Setup”, basic configuration and training take a few days. You will see the first real results and analytics within a week.',
    },
    {
      question: 'I already have a CRM. How is MECHorbit better?',
      answer:
        'Standard CRMs are just accounting systems. MECHorbit is a unified organism that connects the real world (cameras) with the digital one (CRM, apps). We automate processes other systems don’t see: tracking real working time, eliminating the human factor, and speeding up client approvals. It’s a shift from basic accounting to active profit management.',
    },
    {
      question: 'What if I want to change my plan or cancel the subscription?',
      answer:
        'Yes, you have full control over your subscription. You can change your plan at any time — upgrade or downgrade it. Subscription cancellation is also possible according to the contract terms. We operate transparently.',
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
            Frequently Asked <span>Questions</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            We have already heard these questions from service station owners, so we answer them
            before you even call.
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
                <span>{faq.question}</span>
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
