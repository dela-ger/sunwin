import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
  return (
    <>
    <Header />
    <section id="sbsr-1363">
      <div className="cs-container">
        <div className="cs-image-group">
          <picture className="cs-background">
            {/* Responsive images for different screen sizes */}
            <source media="(max-width: 600px)" srcSet="./assets/team.jpg" />
            <source media="(min-width: 601px)" srcSet="./assets/team.jpg" />
            <img
              loading="lazy"
              decoding="async"
              src="./assets/about.jpg"
              alt="people"
              width="605868"
              height="690"
            />
          </picture>
        </div>
        
        {/* Content Section */}
        <div className="cs-content">
          <span className="cs-topper">Who we are</span>
          <h2 className="cs-title">Why Choose Our Security Services</h2>
          <p className="cs-text">
            At Sunwin Security Services, we are committed to providing top-tier security solutions
            tailored to meet the unique needs of our clients. With years of experience in the security
            industry, our dedicated team of professionals is equipped with the knowledge and expertise
            to ensure your safety and peace of mind. Our mission is to protect what matters most to you,
            whether it’s your home, business, or event, by delivering comprehensive security services
            that are reliable, effective, and innovative. We pride ourselves on our proactive approach
            to security. Utilizing the latest technology and strategies, we offer a wide range of services,
            including real-time monitoring, risk assessments, and secure management. Our team undergoes
            rigorous training to stay ahead of emerging threats, ensuring that we can respond swiftly and
            effectively to any situation. At Sunwin, we believe that security is not just about surveillance—it's
            about creating a safe environment where you can thrive.
          </p>
          
          {/* Card Group */}
          <ul className="cs-card-group">
            <Card 
              iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/trophy.svg"
              title="Quality Services"
              text="Delivering exceptional solutions with unwavering commitment to excellence."
            />
            <Card 
              iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/circle-check.svg"
              title="Innovative Security"
              text="Pioneering cutting-edge solutions for unparalleled protection."
            />
          </ul>
          
          {/* List of Services */}
          <ul className="cs-ul">
            <ServiceListItem text="Provide 24/7 security personnel at all mining sites and facilities" />
            <ServiceListItem text="Conduct regular patrols and surveillance" />
            <ServiceListItem text="Implement access control and monitoring systems" />
            <ServiceListItem text="Train personnel on security protocols and emergency response" />
          </ul>
          
        </div>
      </div>
      <div className="cs-bubbles" aria-hidden="true"></div>
    </section>

    <section id="meet-team-977">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Our Team</span>
          <h2 className="cs-title">Our Expert Team Members</h2>
          <p className="cs-text">
            Our team at Sunwin Security Services is composed of highly trained professionals with extensive experience in the security industry. Dedicated to excellence, we work collaboratively to deliver effective solutions and ensure the highest level of safety for our clients.
          </p>
        </div>
        
        <ul className="cs-card-group">
          <TeamMember
            name="Esther Howard"
            position="Manager"
            imageSrc="./assets/blackman.jpg"
            socialLinks={{
              linkedin: "",
              twitter: "",
              instagram: ""
            }}
          />
          <TeamMember
            name="Jenny Wilson"
            position="CEO"
            imageSrc="./assets/blackman.jpg"
            socialLinks={{
              linkedin: "",
              twitter: "",
              instagram: ""
            }}
          />
          <TeamMember
            name="Leslie Alexander"
            position="Director"
            imageSrc="./assets/blackman.jpg"
            socialLinks={{
              linkedin: "",
              twitter: "",
              instagram: ""
            }}
          />
        </ul>
      </div>
    </section>

    <Footer />
    </>
  );
}

// Card Component for About Section
const Card = ({ iconSrc, title, text }) => (
  <li className="cs-item">
    <h3 className="cs-h3">
      <img
        className="cs-h3-icon"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        src={iconSrc}
        alt="icon"
        width="32"
        height="32"
      />
      {title}
    </h3>
    <p className="cs-item-text">{text}</p>
  </li>
);

// Service List Item Component
const ServiceListItem = ({ text }) => (
  <li className="cs-li">
    <img
      className="cs-icon"
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/black-check.svg"
      alt="checkmark"
      width="24"
      height="24"
    />
    {text}
  </li>
);

// TeamMember Component
const TeamMember = ({ name, position, imageSrc, socialLinks }) => (
    <li className="cs-item">
      <picture className="cs-picture">
        <source media="(max-width: 600px)" srcSet={imageSrc} />
        <source media="(min-width: 601px)" srcSet={imageSrc} />
        <img loading="lazy" decoding="async" src={imageSrc} alt={name} width="320" height="400" />
      </picture>
      
      <div className="cs-info">
        <span className="cs-name">{name}</span>
        <span className="cs-job">{position}</span>
        
        <div className="cs-social-group">
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="cs-link" aria-label="visit linkedin">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg"
                alt="linkedin"
                width="12"
                height="12"
              />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="cs-link" aria-label="visit twitter">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-gold.svg"
                alt="twitter"
                width="12"
                height="12"
              />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} className="cs-link" aria-label="visit instagram">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg"
                alt="instagram"
                width="12"
                height="12"
              />
            </a>
          )}
        </div>
      </div>
    </li>
)

export default About;