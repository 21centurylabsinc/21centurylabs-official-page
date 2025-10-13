import HeroSlider from "../components/HeroSlider";
import ServiceSection from "../components/ServiceSection";
import WhyUsSection from "../components/WhyUsSection";
import Footer from "../components/Footer";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServiceSection />
      <WhyUsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
