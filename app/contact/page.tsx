import Header from "../components/Header";
import ContactForm from "../components/contactPage/ContactForm";
import SocialLinks from "../components/contactPage/SocialLinks";
import FAQSection from "../components/contactPage/FAQSection";
import ContactHeroSection from "../components/contactPage/ContactHeroSection";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12  max-w-5xl space-y-20 ">
      {/* Hero Section */}
      <Header />
      <ContactHeroSection />
      {/* Contact Form */}
      <ContactForm />
      {/* Social Links & Info */}
      <SocialLinks />
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default ContactPage;
