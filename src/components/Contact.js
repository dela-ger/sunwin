import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Contact() {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (placeholder functionality)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: replace with form submission logic
    console.log('Form submitted:', formData);
    // Clear form data
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
    <Header />
    <section id="contact-1750">
      <div className="cs-container">
        {/* Form Group */}
        <div className="cs-form-group">
          <div className="cs-content">
            <span className="cs-topper">Get in Touch</span>
            <h2 className="cs-title">Contact Us</h2>
          </div>
          {/* Contact Form */}
          <form className="cs-form" onSubmit={handleSubmit}>
            <label className="cs-label">
              Name *
              <input
                className="cs-input"
                type="text"
                name="name"
                placeholder="Harry Potter"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className="cs-label cs-email">
              Email *
              <input
                className="cs-input"
                type="email"
                name="email"
                placeholder="name@company.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="cs-label cs-phone">
              Phone *
              <input
                className="cs-input"
                type="tel"
                name="phone"
                placeholder="+233 (206) 987-6543"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label className="cs-label">
              Message *
              <textarea
                className="cs-input cs-textarea"
                name="message"
                placeholder="Hello, I am interested..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button className="cs-button-solid cs-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="cs-info-group">
          <ContactInfo title="Location" details="PO BOX 11044<br> Greater Accra, North" />
          <ContactInfo title="Working Hours" details="Monday - Saturday: 10:00 - 20:00<br>Sunday: Closed" />
          <ContactInfo title="Contact" details="M: (+233) 548-237-413<br>E: info@sunwinsecurity.com.gh" />
        </div>
      </div>

      {/* Google Map and Graphics */}
      <div className="cs-picture-group">
        {/* Google Maps iframe */}
        <iframe
          className="cs-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968475.826293338!2d-2.978678137633287!3d5.560596256769567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b920227bfb7%3A0x90a101f39316e2b9!2sAccra!5e0!3m2!1sen!2sgh!4v1696835016813!5m2!1sen!2sgh"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        {/* Decorative Graphics */}
        <GraphicImage className="cs-top cs-light" />
        <GraphicImage className="cs-left cs-light" />
        <GraphicImage className="cs-bottom cs-light" />
        <GraphicImage className="cs-top cs-dark" />
        <GraphicImage className="cs-left cs-dark" />
        <GraphicImage className="cs-bottom cs-dark" />
      </div>
    </section>
    
    <Footer />
    </>
  );
}

// Reusable ContactInfo component
const ContactInfo = ({ title, details }) => (
  <div className="cs-info">
    <span className="cs-topper">{title}</span>
    <span className="cs-detail" dangerouslySetInnerHTML={{ __html: details }}></span>
  </div>
);

// Reusable GraphicImage component
const GraphicImage = ({ className }) => (
  <img
    className={`cs-graphic ${className}`}
    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-light.svg"
    alt="graphic"
    height="161"
    width="1920"
    loading="lazy"
    decoding="async"
  />
);