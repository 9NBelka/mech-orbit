import Header from '../../components/MechOrbitEN/Header/Header';
import Hero from '../../components/MechOrbitEN/Hero/Hero';
import AboutUsScreen from '../../components/MechOrbitEN/AboutUsScreen/AboutUsScreen';
import WhyUsScreen from '../../components/MechOrbitEN/WhyUsScreen/WhyUsScreen';
import WhatDoWeHaveScreen from '../../components/MechOrbitEN/WhatDoWeHaveScreen/WhatDoWeHaveScreen';
import FAQScreen from '../../components/MechOrbitEN/FAQScreen/FAQScreen';
import AIMonitoringScreen from '../../components/MechOrbitEN/AIMonitoringScreen/AIMonitoringScreen';
import ForWhoScreen from '../../components/MechOrbitEN/ForWhoScreen/ForWhoScreen';
import TariffsScreen from '../../components/MechOrbitEN/TariffsScreen/TariffsScreen';
import Footer from '../../components/MechOrbitEN/Footer/Footer';
import ContactsScreen from '../../components/MechOrbitEN/ContactsScreen/ContactsScreen';
import ScrollToHash from '../../components/ScrollToHash/ScrollToHash';
import AboutUsScreenBookvin from '../../components/MechOrbitEN/AboutUsScreenBookvin/AboutUsScreenBookvin';
import AboutUsScreenVinApp from '../../components/MechOrbitEN/AboutUsScreenVinApp/AboutUsScreenVinApp';

export default function MechOrbitEN({ isScrolled, scrollToSection }) {
  const onFooterAndHeaderTextLinksMain = [
    {
      title: 'Product',
      linkToPage: 'product',
    },
    {
      title: 'Solutions',
      linkToPage: 'solution',
    },
    {
      title: 'Calculator',
      linkToPage: 'calculator',
    },
    {
      title: 'Integrations',
      linkToPage: 'integrations',
    },
    {
      title: 'Pricing',
      linkToPage: 'price',
    },
    {
      title: 'Contacts',
      linkToPage: 'contacts',
    },
  ];

  return (
    <div>
      <ScrollToHash />
      <Header
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
        onFooterAndHeaderTextLinksMain={onFooterAndHeaderTextLinksMain}
        currentLang='en'
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <AboutUsScreen scrollToSection={scrollToSection} />
        <AboutUsScreenBookvin scrollToSection={scrollToSection} />
        <AboutUsScreenVinApp scrollToSection={scrollToSection} />
        <WhyUsScreen />
        <WhatDoWeHaveScreen />
        <AIMonitoringScreen scrollToSection={scrollToSection} />
        <ForWhoScreen />
        <TariffsScreen />
        <FAQScreen />
        <ContactsScreen />
      </main>
      <Footer
        onFooterAndHeaderTextLinksMain={onFooterAndHeaderTextLinksMain}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
