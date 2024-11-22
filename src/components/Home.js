import React from 'react';
import CallToAction from './CallToAction';
import Sponsors from './Sponsors';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
  return (
    <div>
    <Header />
    <section id="hero-1618">
      <div className="cs-container">
        <div className="cs-content">
          {/* Topper with Chevron SVGs */}
          <span className="cs-topper">
            <ChevronSVG />
            Plan for A secure future
            <ChevronSVG />
          </span>

          {/* Main Title */}
          <h1 className="cs-title">
            Welcome to Sunwin Security Services <br />Total Security, Maximum Protection
          </h1>

          {/* Learn More Button */}
          <a href="/about" className="cs-button-solid">Learn more...</a>
        </div>

        {/* Card Group */}
        <ul className="cs-card-group">
          <Card
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg"
            title="100% Success Rate"
            text="Proven results with a 100% success rate – your trusted path to guaranteed success."
          />
          <Card
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/speedometer.svg"
            title="Real Time"
            text="Threat detection and rapid response, keeping your security one step ahead."
          />
          <Card
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/Like.svg"
            title="Highly Recommend"
            text="We provide some of the finest quality, most responsive and reliable, and cost effective services and solutions."
          />
        </ul>
      </div>

      {/* Background Image */}
      <picture className="cs-background">
        <source media="(max-width: 600px)" srcSet="./assets/blackguard.jpg" />
        <source media="(min-width: 601px)" srcSet="./assets/blackguard.jpg" />
        <img decoding="async" src="./assets/blackguard.jpg" alt="meeting" width="2250" height="1500" aria-hidden="true" />
      </picture>
    </section>
    
    <section id="why-choose-289">
    <div className="cs-container">
      <div className="cs-content">
        <div className="cs-flex">
          <span className="cs-topper">Our Process</span>
          <h2 className="cs-title">Why You Need To Choose Sunwin Security Services</h2>
        </div>
        <p className="cs-text">
          Choosing Sunwin Security Services means investing in a security partner that prioritizes your safety with cutting-edge solutions and a commitment to excellence. With real-time monitoring, highly trained personnel, and a 100% success rate in safeguarding clients, Sunwin ensures unmatched protection.
        </p>
      </div>
      <ul className="cs-card-group">
        <Card
          iconSrc="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/award.svg"
          title="99% Winning Guarantee"
          text="With a 99% winning guarantee, our security services offer an unparalleled level of reliability and effectiveness. Our expert team uses advanced technologies and proven strategies to ensure maximum protection for your assets and property."
        />
        <Card
          iconSrc="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/sheild-black.svg"
          title="Secure Management"
          text="Secure management is at the core of our security services, ensuring that every aspect of your protection is expertly handled. We provide comprehensive oversight, from access control to risk assessment, ensuring your environment remains safeguarded at all times."
        />
        <Card
          iconSrc="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/call.svg"
          title="Full-Time Support"
          text="Our full-time support ensures that your security needs are met around the clock, providing continuous protection and peace of mind. With a dedicated team available 24/7, we are ready to respond to any situation, offering real-time assistance and immediate action whenever required."
        />
      </ul>
    </div>
  </section>

  {/* services */}

  <section id="blog-1347">
    <div className="cs-container">
      <div className="cs-content">
        <span className="cs-topper">Our Services</span>
        <p className="cs-text">
          Our comprehensive security services are designed to meet your unique needs,
          providing unmatched protection and peace of mind. From real-time monitoring to secure management,
          we ensure your assets are safeguarded 24/7.
        </p>
      </div>
      <ul className="cs-card-group">
        <ServiceCard
          link="/services/manned-guarding"
          imageSrc="./assets/mannedguard.jpg"
          title="Manned guarding both corporate and residential."
          date="SSS"
        />
        <ServiceCard
          link="/services/vvip-protection"
          imageSrc="./assets/vip.jpg"
          title="VVIP protection and escort"
          date="SSS"
        />
        <ServiceCard
          link="/services/electronic"
          imageSrc="./assets/camera.jpg"
          title="Electronic security systems"
          date="SSS"
        />
      </ul>
      <a href="/services" className="cs-button-6" aria-label="read more about us">
        More services
        <ArrowSVG />
      </a>
      <div className="cs-bubbles" aria-hidden="true"></div>
    </div>
  </section>

  <section id="stats-1229">
    <div className="cs-container">
      <div className="cs-content">
        <div className="cs-flex">
          <span className="cs-topper">YOU'RE IN GOOD COMPANY</span>
          <h2 className="cs-title">Empowering Businesses with Sunwin's Comprehensive Security Solutions.</h2>
          <p className="cs-text">
          By partnering with Sunwin, businesses can enhance their security posture, mitigate risks, and ensure the safety of their employees, customers, and valuable assets</p>
        </div>
        <ul className="cs-card-group">
          <StatsCard
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/transparency.svg"
            title="Asset Protection"
          />
          <StatsCard
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/empowerment.svg"
            title="Reputation Enhancement"
          />
          <StatsCard
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/growth.svg"
            title="Business Continuity"
          />
          <StatsCard
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/partnership.svg"
            title="Risk Mitigation"
          />
        </ul>
      </div>
    </div>
  </section>

  <CallToAction />

  <Sponsors />
  <Footer />
</div>
    
  );
}



// Chevron SVG Component
const ChevronSVG = () => (
  <svg className="cs-chevron" width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7">
      <path d="M0.621948 7.49889L6.40262 15L10.343 15L4.56231 7.49889L10.343 0L6.40262 0L0.621948 7.49889Z" fill="var(--chevronColor)" />
      <path d="M7.62195 7.49889L13.4026 15L17.343 15L11.5623 7.49889L17.343 0L13.4026 0L7.62195 7.49889Z" fill="var(--chevronColor)" />
      <path d="M14.7789 7.49889L20.5596 15L24.5 15L18.7193 7.49889L24.5 0L20.5596 0L14.7789 7.49889Z" fill="var(--chevronColor)" />
      <path d="M22.7789 7.49889L28.5596 15L32.5 15L26.7193 7.49889L32.5 0L28.5596 0L22.7789 7.49889Z" fill="var(--chevronColor)" />
      <path d="M30.7789 7.49889L36.5596 15L40.5 15L34.7193 7.49889L40.5 0L36.5596 0L30.7789 7.49889Z" fill="var(--chevronColor)" />
      <path d="M38.7789 7.49889L44.5596 15L48.5 15L42.7193 7.49889L48.5 0L44.5596 0L38.7789 7.49889Z" fill="var(--chevronColor)" />
    </g>
  </svg>
);

// Card Component
const Card = ({ iconSrc, title, text }) => (
  <li className="cs-item">
    <img className="cs-icon" loading="lazy" decoding="async" src={iconSrc} alt="icon" width="48" height="48" />
    <h3 className="cs-h3">{title}</h3>
    <p className="cs-item-text">{text}</p>
  </li>
);

// Individual Service Card Component
const ServiceCard = ({ link, imageSrc, title, date }) => (
    <li className="cs-item">
      <a className="cs-link" href={link}>
        <picture className="cs-picture">
          <source media="(max-width: 600px)" srcSet={imageSrc} />
          <source media="(min-width: 601px)" srcSet={imageSrc} />
          <img decoding="async" src={imageSrc} alt="agency" width="413" height="374" aria-hidden="true" />
        </picture>
        <div className="cs-item-text">
          <h3 className="cs-h3">{title}
            <picture className="cs-icon-wrapper">
              <img className="cs-icon" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/agency-arrow-upper-right.svg" alt="arrow" width="24" height="24" aria-hidden="true" />
            </picture>
          </h3>
          <div className="cs-info">
            <span className="cs-date">
              <img className="cs-date-icon" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/agency-calendar.svg" alt="calendar" width="24" height="24" aria-hidden="true" />
              {date}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
  
  // Arrow SVG Component for More Services Button
  const ArrowSVG = () => (
    <svg className="cs-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="#1A1A1A"/>
    </svg>
  );


// Individual Stats Card Component
const StatsCard = ({ iconSrc, title }) => (
  <li className="cs-item">
    <img src={iconSrc} alt="icon" className="cs-icon" aria-hidden="true" decoding="async" width="60" height="60" />
    <h3 className="cs-h3">{title}</h3>
  </li>
);