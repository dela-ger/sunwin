import React from 'react'

function CallToAction() {
  return (
    <section id="cta-51">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Contact Us</span>
          <h2 className="cs-title">Get In Touch With Us Today</h2>
          <p className="cs-text">
            Ready to enhance your security and protect what matters most? Contact us today for a free consultation and take the first step towards a safer future!
          </p>
          <a href="/contact" className="cs-button-solid">Contact</a>
        </div>
      </div>

      {/* Background Image */}
      <picture className="cs-picture">
        <source media="(max-width: 600px)" srcSet="/assets/hero-background.jpg" />
        <source media="(min-width: 601px)" srcSet="/assets/hero-background.jpg" />
        <img loading="lazy" decoding="async" src="/assets/hero-background.jpg" alt="cabinets" width="1920" height="1280" aria-hidden="true" />
      </picture>
    </section>
  )
}

export default CallToAction