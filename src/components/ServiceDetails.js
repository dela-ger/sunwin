import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CallToAction from './CallToAction';


export default function ServiceDetails({ title, content, listItems, imageUrl }) {
  return (
    <>
    <Header />
    <section id="content-page-852">
      <div className="cs-container">
        {/* Content Section */}
        <div className="cs-content">
          <h1 className="cs-title">{title}</h1>
          <h2>More Details</h2>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <h3>Why Choose Us for Your {title} Services?</h3>
          <ol>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        {/* Image Section */}
        <div className="cs-image-group">
          <picture className="cs-picture">
            <source media="(max-width: 600px)" srcSet={imageUrl} />
            <source media="(min-width: 601px)" srcSet={imageUrl} />
            <img decoding="async" src={imageUrl} alt="service" width="542" height="520" aria-hidden="true" />
          </picture>
        </div>
      </div>
    </section>

    <CallToAction />

    <Footer />
    </>
  );
}