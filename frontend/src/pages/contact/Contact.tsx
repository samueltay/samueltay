import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../../components/contact_form/ContactForm";

function Contact() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <ContactForm />
    </div>
  );
}

export default Contact;
