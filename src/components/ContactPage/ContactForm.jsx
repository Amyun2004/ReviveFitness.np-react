// src/components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server or show thank you)
    alert("Thank you for contacting us!");
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-box">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="xxx-xxx-xxxx"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message ..."
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
