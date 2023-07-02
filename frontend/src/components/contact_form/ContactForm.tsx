import React, { useState, FormEvent } from "react";
import { Helmet } from "react-helmet";
import { GridContainer } from "../../components/grid/GridItem";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSf2p574ah1qEIN7Xp0qapKs5E8Y7F2KBulJ5mGe5_Zsn6Au2Q/formResponse";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.1421280226": name,
          "entry.1719285687": email,
          "entry.303398010": message,
        }).toString(),
      });
      console.log("Form submitted successfully");
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  if (submitted) {
    return <div>Thank you for submitting the form!</div>;
  }

  return (
    <div className="contact-form-container">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <GridContainer maxWidth={1000}>
        <form onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </GridContainer>
    </div>
  );
};

export default ContactForm;
