
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ContactInfo from "../components/ContactPage/ContactInfo";
import ContactForm from "../components/ContactPage/ContactForm";
import "../CSS/contact.css"; // Adjust path if needed
import EmptySpace from "../components/common/EmptySpace";

export default function ContactPage() {
  return (
    <>
      <EmptySpace/>
      <Navbar />
      <h1 className="heading">Contact Us - <span>ReviveFitness</span></h1>
      <p className="reg-texts">Feel free to use the form or drop us an email. Phone calls work too.</p>
      <main id="How-to-contact">
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
