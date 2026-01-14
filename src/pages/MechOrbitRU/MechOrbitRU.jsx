import Header from '../../components/MechOrbitRU/Header/Header';
import Hero from '../../components/MechOrbitRU/Hero/Hero';
import AboutUsScreen from '../../components/MechOrbitRU/AboutUsScreen/AboutUsScreen';
import WhyUsScreen from '../../components/MechOrbitRU/WhyUsScreen/WhyUsScreen';
import WhatDoWeHaveScreen from '../../components/MechOrbitRU/WhatDoWeHaveScreen/WhatDoWeHaveScreen';
import FAQScreen from '../../components/MechOrbitRU/FAQScreen/FAQScreen';
import AIMonitoringScreen from '../../components/MechOrbitRU/AIMonitoringScreen/AIMonitoringScreen';
import ForWhoScreen from '../../components/MechOrbitRU/ForWhoScreen/ForWhoScreen';
import TariffsScreen from '../../components/MechOrbitRU/TariffsScreen/TariffsScreen';
import Footer from '../../components/MechOrbitRU/Footer/Footer';
import ContactsScreen from '../../components/MechOrbitRU/ContactsScreen/ContactsScreen';
import ScrollToHash from '../../components/ScrollToHash/ScrollToHash';
import AboutUsScreenBookvin from '../../components/MechOrbitRU/AboutUsScreenBookvin/AboutUsScreenBookvin';

export default function MechOrbitRU({ isScrolled, scrollToSection }) {
  const onFooterAndHeaderTextLinksMain = [
    {
      title: 'Продукт',
      linkToPage: 'product',
    },
    {
      title: 'Рішення',
      linkToPage: 'solution',
    },
    {
      title: 'Калькулятор',
      linkToPage: 'calculator',
    },
    {
      title: 'Інтеграції',
      linkToPage: 'integrations',
    },
    {
      title: 'Тарифи',
      linkToPage: 'price',
    },
    {
      title: 'Контакти',
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
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <AboutUsScreen />
        <AboutUsScreenBookvin />
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
