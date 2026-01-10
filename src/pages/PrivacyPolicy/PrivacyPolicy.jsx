import clsx from 'clsx';
import styles from './PrivacyPolicy.module.scss';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyPolicyMainBlock}>
      {/* <p className={styles.backText}>
        <BsArrowLeftShort className={styles.icon} />
        back
      </p> */}
      <div className={styles.privacyPolicyBlock}>
        <h1 className={styles.privacyPolicyTitle}>
          Privacy Policy for <span>MechOrbit</span>
        </h1>
        <p className={styles.privacyPolicyDescriptions}>
          Thank you for choosing to be part of our community at MechOrbit (“Company”, “we”, “us”,
          “our”). We are committed to protecting your personal information and your right to
          privacy. This Privacy Policy explains what information we collect, how we use it, and what
          rights you have in relation to it when you visit or use our website: https://mechorbit.com
          (the “Website”).
        </p>
        <p className={styles.privacyPolicyDescriptions}>
          By accessing or using our Website, you agree to the terms of this Privacy Policy. If you
          do not agree with any part of this policy, please do not use our Website.
        </p>
        <div className={styles.privacyPolicyMainList}>
          <h4 className={styles.privacyPolicyMainListTitle}>1. Information We Collect</h4>
          <h5
            className={clsx(
              styles.privacyPolicyMainListTitle,
              styles.privacyPolicyMainListTitleDown,
            )}>
            1.1 Personal Data You Provide
          </h5>
          <p className={styles.privacyPolicyMainListDescriptions}>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className={styles.privacyPolicyList}>
            <li>Contact us via forms (e.g., contact or support forms);</li>
            <li>Sign up for newsletters or updates;</li>
            <li>Use interactive features on the Website;</li>
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>
            Examples of such personal data may include your:
          </p>
          <ul className={styles.privacyPolicyList}>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Any other information you choose to provide.</li>
          </ul>
          <h5
            className={clsx(
              styles.privacyPolicyMainListTitle,
              styles.privacyPolicyMainListTitleDown,
            )}>
            1.2 Automatically Collected Information
          </h5>
          <p className={styles.privacyPolicyMainListDescriptions}>
            When you visit the Website, we may automatically collect certain information about your
            device and how you interact with the Website, including:
          </p>
          <ul className={styles.privacyPolicyList}>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Date and time of visit</li>
            <li>Referring website address</li>
            <li>Other analytics and usage data.</li>
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>
            This information is collected using cookies and similar tracking technologies as
            described below.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>
            2. Cookies and Tracking Technologies
          </h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            We use cookies and similar technologies to:
          </p>
          <ul className={styles.privacyPolicyList}>
            <li>Improve the performance and functionality of our Website;</li>
            <li>Understand how users interact with our content;</li>
            <li>Provide analytics and statistical data;</li>
            <li>Remember user preferences.</li>
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>
            A cookie is a small text file stored on your device. If you do not want to accept
            cookies, you can adjust your browser settings or use browser tools to disable cookies.
            Note that disabling cookies may affect the functionality of parts of the Website.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>3. How We Use Your Information</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            We use the information we collect to:
          </p>
          <ul className={styles.privacyPolicyList}>
            <li>Provide, operate, and maintain the Website;</li>
            <li>Respond to your inquiries and communicate with you;</li>
            <li>Improve and personalize your experience on the Website;</li>
            <li>Monitor usage and performance of our services;</li>
            <li>Comply with legal obligations;</li>
            <li>Other legitimate business purposes.</li>
          </ul>
          <h4 className={styles.privacyPolicyMainListTitle}>4. Sharing Your Information</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            We may share your information with:
          </p>
          <ul className={styles.privacyPolicyList}>
            <li>
              Trusted third-party service providers who assist in operating the Website (e.g.,
              analytics, support);
            </li>
            <li>
              Legal authorities or enforcement agencies if required by law or to protect our rights;
            </li>
            <li>Other parties with your consent.</li>
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>
            We do not sell or rent your personal data to third parties for marketing purposes.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>5. Data Security</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            We take reasonable administrative, technical, and physical measures to protect your
            personal data from loss, theft, misuse, unauthorized access, disclosure, alteration, and
            destruction. However, no method of data transmission over the Internet or electronic
            storage is completely secure.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>6. Third-Party Links</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            Our Website may contain links to third-party websites. We are not responsible for the
            content, privacy policies, or practices of any third-party sites. We encourage you to
            read the privacy policies of any website you visit.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>7. Children’s Privacy</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            The Website is not intended for individuals under the age of 13. We do not knowingly
            collect personal data from children under 13. If we learn that we have collected such
            data, we will take steps to delete it.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>8. Your Rights</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            Depending on your location, you may have certain rights regarding your personal
            information, including:
          </p>
          <ul className={styles.privacyPolicyList}>
            <li>Right to access your personal data;</li>
            <li>Right to correct or update your data;</li>
            <li>Right to request deletion of your data;</li>
            <li>Right to object to or restrict processing;</li>
            <li>Right to withdraw consent at any time.</li>
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>
            To exercise these rights, please contact us using the contact details below.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>9. Changes to This Privacy Policy</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            We may update this Privacy Policy from time to time. When changes are made, we will
            update the “Last updated” date at the top of this page. Your continued use of the
            Website after changes are made constitutes acceptance of those changes.
          </p>
          <h4 className={styles.privacyPolicyMainListTitle}>10. Contact Us</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className={styles.privacyPolicyMainListDescriptions}>Email: hello@mechorbit.com</p>
        </div>
      </div>
    </div>
  );
}
