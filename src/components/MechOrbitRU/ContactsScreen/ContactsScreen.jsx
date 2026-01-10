import { BsEnvelope, BsTelegram, BsTelephoneForward } from 'react-icons/bs';
import styles from './ContactsScreen.module.scss';
import { FiArrowUpRight } from 'react-icons/fi';
import ContactForm from './ContactForm/ContactForm';
import clsx from 'clsx';

export default function ContactsScreen() {
  return (
    <section className={styles.contactsMain} id='contacts'>
      <h3 className={styles.textBackground}>CONTACT</h3>
      <div className={styles.container}>
        <div className={styles.contactsAndFormBlock}>
          <div className={styles.textContent}>
            <h3 className={styles.titleScreen}>
              Хочете керований і <span>прибутковий</span> автосервіс?
            </h3>
            <p className={styles.textDescription}>
              Залиште контакти і ми запропонуємо формат впровадження саме під ваш сервіс: з
              урахуванням поточного масштабу команди та цілей.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.iconAndContacts}>
                  <div className={styles.contactIconBlock}>
                    <BsEnvelope className={styles.contactIcon} />
                  </div>
                  <div>
                    <p className={styles.contactItemTitleMini}>Напишите нам</p>
                    <a
                      href='mailto:info@mechorbit.com'
                      className={styles.contactLink}
                      target='_blank'>
                      <p className={styles.contactItemTextMini}>info@mechorbit.com</p>
                    </a>
                  </div>
                </div>
                <a href='mailto:info@mechorbit.com' className={styles.contactLink} target='_blank'>
                  <div className={styles.iconRightLinkBlock}>
                    <FiArrowUpRight className={styles.iconRightLink} />
                  </div>
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconAndContacts}>
                  <div className={styles.contactIconBlock}>
                    <BsTelephoneForward className={styles.contactIcon} />
                  </div>
                  <div>
                    <p className={styles.contactItemTitleMini}>Позвоните нам</p>
                    <a href='https://wa.me/380733291216' target='_blank'>
                      <p className={styles.contactItemTextMini}>+380 (73) 123 12 12</p>
                    </a>
                  </div>
                </div>
                <a href='https://wa.me/380733291216' target='_blank'>
                  <div className={styles.iconRightLinkBlock}>
                    <FiArrowUpRight className={styles.iconRightLink} />
                  </div>
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconAndContacts}>
                  <div className={styles.contactIconBlock}>
                    <BsTelegram className={styles.contactIcon} />
                  </div>
                  <div>
                    <p className={styles.contactItemTitleMini}>Телеграм</p>
                    <a href='https://t.me/mechorbit' target='_blank'>
                      <p className={styles.contactItemTextMini}>@mechorbit</p>
                    </a>
                  </div>
                </div>
                <a href='https://t.me/mechorbit' target='_blank'>
                  <div className={styles.iconRightLinkBlock}>
                    <FiArrowUpRight className={styles.iconRightLink} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
