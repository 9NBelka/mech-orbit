import Header from '../../components/MechOrbitUA/Header/Header';
import Hero from '../../components/MechOrbitUA/Hero/Hero';
import AboutUsScreen from '../../components/MechOrbitUA/AboutUsScreen/AboutUsScreen';
import WhyUsScreen from '../../components/MechOrbitUA/WhyUsScreen/WhyUsScreen';
import WhatDoWeHaveScreen from '../../components/MechOrbitUA/WhatDoWeHaveScreen/WhatDoWeHaveScreen';
import FAQScreen from '../../components/MechOrbitUA/FAQScreen/FAQScreen';
import AIMonitoringScreen from '../../components/MechOrbitUA/AIMonitoringScreen/AIMonitoringScreen';
import ForWhoScreen from '../../components/MechOrbitUA/ForWhoScreen/ForWhoScreen';
import TariffsScreen from '../../components/MechOrbitUA/TariffsScreen/TariffsScreen';
import Footer from '../../components/MechOrbitUA/Footer/Footer';
import ContactsScreen from '../../components/MechOrbitUA/ContactsScreen/ContactsScreen';
import ScrollToHash from '../../components/ScrollToHash/ScrollToHash';
import AboutUsScreenBookvin from '../../components/MechOrbitUA/AboutUsScreenBookvin/AboutUsScreenBookvin';
import AboutUsScreenVinApp from '../../components/MechOrbitUA/AboutUsScreenVinApp/AboutUsScreenVinApp';

export default function MechOrbitUA({ isScrolled, scrollToSection }) {
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
        currentLang='ua'
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
