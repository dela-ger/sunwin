import React from 'react';
import Header from './Header'
import Footer from './Footer'
import CallToAction from './CallToAction';

export default function Services() {
  return (


    <>
    <Header />
    <section id="sbs-683">
      <div className="cs-container">
        {/* Left Section - Image Group */}
        <div className="cs-image-group">
          <ServiceImage src="./assets/camera2.jpg" alt="camera" />
          <ServiceImage src="./assets/guard.jpg" alt="guard" />
          <ServiceImage src="./assets/gadgets2.jpg" alt="gadget" />
          <ServiceImage src="./assets/crowd.jpg" alt="crowd" />

          {/* Zig Zag Graphic */}
          <img
            className="cs-graphic"
            aria-hidden="true"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fzigzag.svg"
            loading="lazy"
            decoding="async"
            alt="zigzag"
            width="983"
            height="416"
          />
        </div>
        
        {/* Right Section - Content */}
        <div className="cs-content">
          <span className="cs-topper">Why Choose Us</span>
          <h2 className="cs-title">
            We Care About <span className="cs-color">Your Security</span> And Wellness
          </h2>
          <p className="cs-text">
            From real-time monitoring to rapid response, we are dedicated to preventing and neutralizing threats before they become issues. Trust us to deliver exceptional security solutions with an outstanding track record of success, ensuring your safety and peace of mind.
          </p>
          <p className="cs-text">
            Whether for residential, commercial, or event security, we provide tailored services that are reliable, efficient, and trusted by numerous satisfied customers. When it comes to security, Sunwin is your first line of defense.
          </p>
        </div>
      </div>
    </section>

    <section id="services-1628">
      <div className="cs-container">
        <div className="cs-content">
          <div className="cs-flex">
            <span className="cs-topper">Our Services</span>
            <h2 className="cs-title">Grow Your Business with Our New Bold Agency</h2>
          </div>
          <p className="cs-text">
            Grow your business with our bold, innovative security solutions designed to protect and empower your operations. At New Bold Agency, we understand that security is a critical component of business success, which is why we offer cutting-edge services tailored to meet your unique needs. From advanced surveillance and real-time monitoring to risk assessment and full-time support, our expert team ensures that your assets, employees, and customers are safeguarded.
          </p>
        </div>

        {/* Service Cards */}
        <ul className="cs-card-group">
          <ServiceCard
            link="./services/manned-guarding"
            imageSrc="./assets/mannedguard.jpg"
            title="Manned guarding both corporate and residential."
            text="We provide some of the finest quality, most reliable, and cost-effective services and solutions."
          />
          <ServiceCard
            link="./services/vvip-protection"
            imageSrc="../assets/vip.jpg"
            title="VVIP Protection and Escort"
            text="We provide some of the finest quality, most reliable, and cost-effective services and solutions."
          />
          <ServiceCard
            link="./services/events"
            imageSrc="./assets/crowd.jpg"
            title="Event and Crowd Control"
            text="We provide some of the finest quality, most reliable, and cost-effective services and solutions."
          />
          <ServiceCard
            link="./services/electronic"
            imageSrc="./assets/camera.jpg"
            title="Electronic Security Systems"
            text="We provide some of the finest quality, most reliable, and cost-effective services and solutions."
          />
          <ServiceCard
            link="./services/compat"
            imageSrc="../assets/community.jpg"
            title="Community Patrols"
            text="We provide some of the finest quality, most reliable, and cost-effective services and solutions."
          />
          <ServiceCard
            link="./services/gadgets"
            imageSrc="./assets/gadgets.jpg"
            title="Supply of Security Gadgets"
            text="We provide some of the finest quality, most reliable, and cost-effective services and solutions."
          />
          <ServiceCard
            link="./services/general"
            imageSrc="../assets/investigations.jpg"
            title="General Investigations"
            text="We provide some of the finest quality, most reliable, and cost-effective services and solutions."
          />
        </ul>
      </div>
    </section>

    <CallToAction />

    <Footer />
    </>
  );
}

// ServiceImage Component for displaying images
const ServiceImage = ({ src, alt }) => (
  <picture className="cs-picture">
    <source media="(max-width: 600px)" srcSet={src} />
    <source media="(min-width: 601px)" srcSet={src} />
    <img loading="lazy" decoding="async" src={src} alt={alt} width="306" height="360" aria-hidden="true" />
  </picture>
);

// ServiceCard Component for each service
const ServiceCard = ({ link, imageSrc, title, text }) => (
  <li className="cs-item">
    <a href={link} className="cs-link">
      <picture className="cs-picture">
        <source media="(max-width: 600px)" srcSet={imageSrc} />
        <source media="(min-width: 601px)" srcSet={imageSrc} />
        <img loading="lazy" decoding="async" src={imageSrc} alt={title} width="413" height="420" />
      </picture>
      <h3 className="cs-h3">{title}</h3>
      <p className="cs-item-text">{text}</p>
      <span className="cs-fake-link">
        More
        <img
          className="cs-icon"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-chevron-right.svg"
          alt=""
          width="20"
          height="20"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </span>
    </a>
  </li>
);