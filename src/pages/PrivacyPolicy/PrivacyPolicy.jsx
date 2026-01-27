import clsx from 'clsx';
import styles from './PrivacyPolicy.module.scss';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate, useOutletContext } from 'react-router-dom';

const translations = {
  ua: {
    title: 'Політика конфіденційності для',
    titleHighlight: 'MechOrbit',
    description1:
      'Дякуємо, що обрали бути частиною нашої спільноти MechOrbit (“Компанія”, “ми”, “наш”). Ми прагнемо захищати вашу персональну інформацію та ваше право на конфіденційність. Ця Політика конфіденційності пояснює, яку інформацію ми збираємо, як ми її використовуємо та які права ви маєте щодо неї, коли ви відвідуєте або використовуєте наш веб-сайт: https://mechorbit.com (“Веб-сайт”).',
    description2:
      'Відвідуючи або використовуючи наш Веб-сайт, ви погоджуєтесь з умовами цієї Політики конфіденційності. Якщо ви не погоджуєтесь з будь-якою частиною цієї політики, будь ласка, не використовуйте наш Веб-сайт.',
    section1: '1. Інформація, яку ми збираємо',
    section1_1: '1.1 Персональні дані, які ви надаєте',
    section1_1_desc:
      'Ми можемо збирати персональну інформацію, яку ви добровільно надаєте нам, коли ви:',
    section1_1_list1: [
      'Звертаєтесь до нас через форми (наприклад, контактні або підтримки);',
      'Підписуєтесь на новини або оновлення;',
      'Використовуєте інтерактивні функції на Веб-сайті;',
    ],
    section1_1_desc2: 'Прикладами таких персональних даних можуть бути:',
    section1_1_list2: [
      'Повне ім’я',
      'Адреса електронної пошти',
      'Номер телефону',
      'Назва компанії',
      'Будь-яка інша інформація, яку ви вирішите надати.',
    ],
    section1_2: '1.2 Автоматично зібрана інформація',
    section1_2_desc:
      'Коли ви відвідуєте Веб-сайт, ми можемо автоматично збирати певну інформацію про ваш пристрій та те, як ви взаємодієте з Веб-сайтом, зокрема:',
    section1_2_list: [
      'IP-адреса',
      'Тип і версія браузера',
      'Операційна система',
      'Сторінки, які відвідуються, і час, проведений на сторінках',
      'Дата та час відвідування',
      'Адреса сайту, з якого ви перейшли',
      'Інші аналітичні та дані використання.',
    ],
    section1_2_desc2:
      'Ця інформація збирається за допомогою файлів cookie та подібних технологій відстеження, як описано нижче.',
    section2: '2. Файли cookie та технології відстеження',
    section2_desc: 'Ми використовуємо файли cookie та подібні технології для:',
    section2_list: [
      'Покращення продуктивності та функціональності нашого Веб-сайту;',
      'Розуміння того, як користувачі взаємодіють з нашим контентом;',
      'Надання аналітики та статистичних даних;',
      'Запам’ятовування налаштувань користувача.',
    ],
    section2_desc2:
      'Cookie — це невеликий текстовий файл, що зберігається на вашому пристрої. Якщо ви не хочете приймати cookie, ви можете налаштувати свій браузер або використати інструменти браузера для вимкнення cookie. Зверніть увагу, що вимкнення cookie може вплинути на функціональність частини Веб-сайту.',
    section3: '3. Як ми використовуємо вашу інформацію',
    section3_desc: 'Ми використовуємо зібрану інформацію для:',
    section3_list: [
      'Надання, експлуатації та підтримки Веб-сайту;',
      'Відповіді на ваші запити та спілкування з вами;',
      'Покращення та персоналізації вашого досвіду на Веб-сайті;',
      'Моніторингу використання та продуктивності наших послуг;',
      'Виконання юридичних зобов’язань;',
      'Інших законних бізнес-цілей.',
    ],
    section4: '4. Передача вашої інформації',
    section4_desc: 'Ми можемо передавати вашу інформацію:',
    section4_list: [
      'Довіреним стороннім сервіс-провайдерам, які допомагають у роботі Веб-сайту (наприклад, аналітика, підтримка);',
      'Юридичним органам або правоохоронним органам, якщо це вимагається законом або для захисту наших прав;',
      'Іншим сторонам з вашої згоди.',
    ],
    section4_desc2:
      'Ми не продаємо та не здаємо в оренду ваші персональні дані третім сторонам для маркетингових цілей.',
    section5: '5. Безпека даних',
    section5_desc:
      'Ми застосовуємо розумні адміністративні, технічні та фізичні заходи для захисту ваших персональних даних від втрати, крадіжки, неправомірного використання, несанкціонованого доступу, розкриття, зміни та знищення. Однак жоден метод передачі даних через Інтернет або електронне зберігання не є абсолютно безпечним.',
    section6: '6. Посилання на сторонні сайти',
    section6_desc:
      'Наш Веб-сайт може містити посилання на сторонні веб-сайти. Ми не несемо відповідальності за контент, політики конфіденційності або практики будь-яких сторонніх сайтів. Ми рекомендуємо вам ознайомитися з політиками конфіденційності будь-якого сайту, який ви відвідуєте.',
    section7: '7. Конфіденційність дітей',
    section7_desc:
      'Веб-сайт не призначений для осіб віком до 13 років. Ми не навмисно збираємо персональні дані від дітей до 13 років. Якщо ми дізнаємося, що ми зібрали такі дані, ми вживемо заходів для їх видалення.',
    section8: '8. Ваші права',
    section8_desc:
      'Залежно від вашого місцезнаходження, ви можете мати певні права щодо вашої персональної інформації, зокрема:',
    section8_list: [
      'Право на доступ до ваших персональних даних;',
      'Право виправляти або оновлювати ваші дані;',
      'Право вимагати видалення ваших даних;',
      'Право заперечувати або обмежувати обробку;',
      'Право відкликати згоду у будь-який момент.',
    ],
    section8_desc2:
      'Щоб реалізувати ці права, будь ласка, зв’яжіться з нами, використовуючи контактні дані нижче.',
    section9: '9. Зміни до цієї Політики конфіденційності',
    section9_desc:
      'Ми можемо оновлювати цю Політику конфіденційності час від часу. Коли будуть внесені зміни, ми оновимо дату “Останнє оновлення” на початку цієї сторінки. Ваше подальше використання Веб-сайту після внесення змін означає прийняття цих змін.',
    section10: '10. Зв’язок з нами',
    section10_desc:
      'Якщо у вас є будь-які питання або занепокоєння щодо цієї Політики конфіденційності, будь ласка, зв’яжіться з нами за адресою:',
    section10_contact: 'Email: hello@mechorbit.com',
    backButton: 'Назад',
  },
  ru: {
    title: 'Политика конфиденциальности для',
    titleHighlight: 'MechOrbit',
    description1:
      'Спасибо, что выбрали быть частью нашего сообщества MechOrbit (“Компания”, “мы”, “наш”). Мы стремимся защищать вашу личную информацию и ваше право на конфиденциальность. Эта Политика конфиденциальности объясняет, какую информацию мы собираем, как мы ее используем и какие права у вас есть в отношении нее, когда вы посещаете или используете наш веб-сайт: https://mechorbit.com (“Веб-сайт”).',
    description2:
      'Получая доступ к нашему Веб-сайту или используя его, вы соглашаетесь с условиями этой Политики конфиденциальности. Если вы не согласны с любой частью этой политики, пожалуйста, не используйте наш Веб-сайт.',
    section1: '1. Информация, которую мы собираем',
    section1_1: '1.1 Персональные данные, которые вы предоставляете',
    section1_1_desc:
      'Мы можем собирать персональную информацию, которую вы добровольно предоставляете нам, когда вы:',
    section1_1_list1: [
      'Связываетесь с нами через формы (например, контактные или поддержки);',
      'Подписываетесь на новости или обновления;',
      'Используете интерактивные функции на Веб-сайте;',
    ],
    section1_1_desc2: 'Примерами таких персональных данных могут быть:',
    section1_1_list2: [
      'Полное имя',
      'Адрес электронной почты',
      'Номер телефона',
      'Название компании',
      'Любая другая информация, которую вы решите предоставить.',
    ],
    section1_2: '1.2 Автоматически собранная информация',
    section1_2_desc:
      'Когда вы посещаете Веб-сайт, мы можем автоматически собирать определенную информацию о вашем устройстве и о том, как вы взаимодействуете с Веб-сайтом, включая:',
    section1_2_list: [
      'IP-адрес',
      'Тип и версия браузера',
      'Операционная система',
      'Страницы, которые посещаются, и время, проведенное на страницах',
      'Дата и время посещения',
      'Адрес сайта, с которого вы перешли',
      'Другие аналитические и данные использования.',
    ],
    section1_2_desc2:
      'Эта информация собирается с помощью файлов cookie и подобных технологий отслеживания, как описано ниже.',
    section2: '2. Файлы cookie и технологии отслеживания',
    section2_desc: 'Мы используем файлы cookie и подобные технологии для:',
    section2_list: [
      'Улучшения производительности и функциональности нашего Веб-сайта;',
      'Понимания того, как пользователи взаимодействуют с нашим контентом;',
      'Предоставления аналитики и статистических данных;',
      'Запоминания настроек пользователя.',
    ],
    section2_desc2:
      'Cookie — это небольшой текстовый файл, который хранится на вашем устройстве. Если вы не хотите принимать cookie, вы можете настроить свой браузер или использовать инструменты браузера для отключения cookie. Обратите внимание, что отключение cookie может повлиять на функциональность части Веб-сайта.',
    section3: '3. Как мы используем вашу информацию',
    section3_desc: 'Мы используем собранную информацию для:',
    section3_list: [
      'Предоставления, эксплуатации и поддержки Веб-сайта;',
      'Ответа на ваши запросы и общения с вами;',
      'Улучшения и персонализации вашего опыта на Веб-сайте;',
      'Мониторинга использования и производительности наших услуг;',
      'Выполнения юридических обязательств;',
      'Других законных бизнес-целей.',
    ],
    section4: '4. Передача вашей информации',
    section4_desc: 'Мы можем передавать вашу информацию:',
    section4_list: [
      'Доверенным сторонним сервис-провайдерам, которые помогают в работе Веб-сайта (например, аналитика, поддержка);',
      'Юридическим органам или правоохранительным органам, если это требуется законом или для защиты наших прав;',
      'Другим сторонам с вашего согласия.',
    ],
    section4_desc2:
      'Мы не продаем и не сдаём в аренду ваши персональные данные третьим сторонам для маркетинговых целей.',
    section5: '5. Безопасность данных',
    section5_desc:
      'Мы применяем разумные административные, технические и физические меры для защиты ваших персональных данных от потери, кражи, неправомерного использования, несанкционированного доступа, раскрытия, изменения и уничтожения. Однако ни один метод передачи данных через Интернет или электронного хранения не является абсолютно безопасным.',
    section6: '6. Ссылки на сторонние сайты',
    section6_desc:
      'Наш Веб-сайт может содержать ссылки на сторонние веб-сайты. Мы не несем ответственности за контент, политики конфиденциальности или практики любых сторонних сайтов. Мы рекомендуем вам ознакомиться с политиками конфиденциальности любого сайта, который вы посещаете.',
    section7: '7. Конфиденциальность детей',
    section7_desc:
      'Веб-сайт не предназначен для лиц младше 13 лет. Мы не намеренно собираем персональные данные от детей младше 13 лет. Если мы узнаем, что мы собрали такие данные, мы предпримем шаги для их удаления.',
    section8: '8. Ваши права',
    section8_desc:
      'В зависимости от вашего местоположения, вы можете иметь определенные права в отношении вашей персональной информации, включая:',
    section8_list: [
      'Право на доступ к вашим персональным данным;',
      'Право исправлять или обновлять ваши данные;',
      'Право требовать удаления ваших данных;',
      'Право возражать или ограничивать обработку;',
      'Право отозвать согласие в любое время.',
    ],
    section8_desc2:
      'Чтобы реализовать эти права, пожалуйста, свяжитесь с нами, используя контактные данные ниже.',
    section9: '9. Изменения в этой Политике конфиденциальности',
    section9_desc:
      'Мы можем обновлять эту Политику конфиденциальности время от времени. Когда будут внесены изменения, мы обновим дату “Последнее обновление” в начале этой страницы. Ваше дальнейшее использование Веб-сайта после внесения изменений означает принятие этих изменений.',
    section10: '10. Свяжитесь с нами',
    section10_desc:
      'Если у вас есть какие-либо вопросы или опасения по поводу этой Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу:',
    section10_contact: 'Email: hello@mechorbit.com',
    backButton: 'Назад',
  },
  en: {
    title: 'Privacy Policy for',
    titleHighlight: 'MechOrbit',
    description1:
      'Thank you for choosing to be part of our community at MechOrbit (“Company”, “we”, “us”, “our”). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it when you visit or use our website: https://mechorbit.com (the “Website”).',
    description2:
      'By accessing or using our Website, you agree to the terms of this Privacy Policy. If you do not agree with any part of this policy, please do not use our Website.',
    section1: '1. Information We Collect',
    section1_1: '1.1 Personal Data You Provide',
    section1_1_desc:
      'We may collect personal information that you voluntarily provide to us when you:',
    section1_1_list1: [
      'Contact us via forms (e.g., contact or support forms);',
      'Sign up for newsletters or updates;',
      'Use interactive features on the Website;',
    ],
    section1_1_desc2: 'Examples of such personal data may include your:',
    section1_1_list2: [
      'Full name',
      'Email address',
      'Phone number',
      'Company name',
      'Any other information you choose to provide.',
    ],
    section1_2: '1.2 Automatically Collected Information',
    section1_2_desc:
      'When you visit the Website, we may automatically collect certain information about your device and how you interact with the Website, including:',
    section1_2_list: [
      'IP address',
      'Browser type and version',
      'Operating system',
      'Pages visited and time spent on pages',
      'Date and time of visit',
      'Referring website address',
      'Other analytics and usage data.',
    ],
    section1_2_desc2:
      'This information is collected using cookies and similar tracking technologies as described below.',
    section2: '2. Cookies and Tracking Technologies',
    section2_desc: 'We use cookies and similar technologies to:',
    section2_list: [
      'Improve the performance and functionality of our Website;',
      'Understand how users interact with our content;',
      'Provide analytics and statistical data;',
      'Remember user preferences.',
    ],
    section2_desc2:
      'A cookie is a small text file stored on your device. If you do not want to accept cookies, you can adjust your browser settings or use browser tools to disable cookies. Note that disabling cookies may affect the functionality of parts of the Website.',
    section3: '3. How We Use Your Information',
    section3_desc: 'We use the information we collect to:',
    section3_list: [
      'Provide, operate, and maintain the Website;',
      'Respond to your inquiries and communicate with you;',
      'Improve and personalize your experience on the Website;',
      'Monitor usage and performance of our services;',
      'Comply with legal obligations;',
      'Other legitimate business purposes.',
    ],
    section4: '4. Sharing Your Information',
    section4_desc: 'We may share your information with:',
    section4_list: [
      'Trusted third-party service providers who assist in operating the Website (e.g., analytics, support);',
      'Legal authorities or enforcement agencies if required by law or to protect our rights;',
      'Other parties with your consent.',
    ],
    section4_desc2:
      'We do not sell or rent your personal data to third parties for marketing purposes.',
    section5: '5. Data Security',
    section5_desc:
      'We take reasonable administrative, technical, and physical measures to protect your personal data from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no method of data transmission over the Internet or electronic storage is completely secure.',
    section6: '6. Third-Party Links',
    section6_desc:
      'Our Website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to read the privacy policies of any website you visit.',
    section7: '7. Children’s Privacy',
    section7_desc:
      'The Website is not intended for individuals under the age of 13. We do not knowingly collect personal data from children under 13. If we learn that we have collected such data, we will take steps to delete it.',
    section8: '8. Your Rights',
    section8_desc:
      'Depending on your location, you may have certain rights regarding your personal information, including:',
    section8_list: [
      'Right to access your personal data;',
      'Right to correct or update your data;',
      'Right to request deletion of your data;',
      'Right to object to or restrict processing;',
      'Right to withdraw consent at any time.',
    ],
    section8_desc2: 'To exercise these rights, please contact us using the contact details below.',
    section9: '9. Changes to This Privacy Policy',
    section9_desc:
      'We may update this Privacy Policy from time to time. When changes are made, we will update the “Last updated” date at the top of this page. Your continued use of the Website after changes are made constitutes acceptance of those changes.',
    section10: '10. Contact Us',
    section10_desc:
      'If you have any questions or concerns about this Privacy Policy, please contact us at:',
    section10_contact: 'Email: hello@mechorbit.com',
    backButton: 'Back',
  },
};

export default function PrivacyPolicy() {
 
  const { currentLang } = useOutletContext();
  const translationsText = translations[currentLang] || translations.en;

  return (
    <div className={styles.privacyPolicyMainBlock}>
      <div className={styles.privacyPolicyBlock}>
       

        <h1 className={styles.privacyPolicyTitle}>
          {translationsText.title} <span>{translationsText.titleHighlight}</span>
        </h1>

        <p className={styles.privacyPolicyDescriptions}>{translationsText.description1}</p>
        <p className={styles.privacyPolicyDescriptions}>{translationsText.description2}</p>

        <div className={styles.privacyPolicyMainList}>
          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section1}</h4>

          <h5
            className={clsx(
              styles.privacyPolicyMainListTitle,
              styles.privacyPolicyMainListTitleDown,
            )}>
            {translationsText.section1_1}
          </h5>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section1_1_desc}
          </p>

          <ul className={styles.privacyPolicyList}>
            {translationsText.section1_1_list1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section1_1_desc2}
          </p>

          <ul className={styles.privacyPolicyList}>
            {translationsText.section1_1_list2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h5
            className={clsx(
              styles.privacyPolicyMainListTitle,
              styles.privacyPolicyMainListTitleDown,
            )}>
            {translationsText.section1_2}
          </h5>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section1_2_desc}
          </p>

          <ul className={styles.privacyPolicyList}>
            {translationsText.section1_2_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section1_2_desc2}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section2}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section2_desc}
          </p>

          <ul className={styles.privacyPolicyList}>
            {translationsText.section2_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section2_desc2}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section3}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section3_desc}
          </p>

          <ul className={styles.privacyPolicyList}>
            {translationsText.section3_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section4}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section4_desc}
          </p>

          <ul className={styles.privacyPolicyList}>
            {translationsText.section4_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section4_desc2}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section5}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section5_desc}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section6}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section6_desc}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section7}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section7_desc}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section8}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section8_desc}
          </p>

          <ul className={styles.privacyPolicyList}>
            {translationsText.section8_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section8_desc2}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section9}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section9_desc}
          </p>

          <h4 className={styles.privacyPolicyMainListTitle}>{translationsText.section10}</h4>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section10_desc}
          </p>

          <p className={styles.privacyPolicyMainListDescriptions}>
            {translationsText.section10_contact}
          </p>
        </div>
      </div>
    </div>
  );
}
