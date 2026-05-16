import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;