import React, { useState, useEffect } from 'react';

function Header() {
  // State to handle active classes for toggling
  const [isMenuActive, setMenuActive] = useState(false);
  const [isBodyOpen, setBodyOpen] = useState(false);

  // Toggle function to handle menu state
  const handleToggle = () => {
    setMenuActive(!isMenuActive);
    setBodyOpen(!isBodyOpen);
  };

  useEffect(() => {
    const dropDowns = document.querySelectorAll('#cs-navigation .cs-dropdown');

    // Event handler for dropdowns
    const handleDropdownClick = (event) => {
      event.currentTarget.classList.toggle('cs-active');
    };

    // Attach click listeners to dropdown items
    dropDowns.forEach((dropdown) => {
      dropdown.addEventListener('click', handleDropdownClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      dropDowns.forEach((dropdown) => {
        dropdown.removeEventListener('click', handleDropdownClick);
      });
    };
  }, []);

  return (
    <header id="cs-navigation" className={isMenuActive ? 'cs-active' : ''}>
      <div className="cs-container">
        <a href="/" className="cs-logo" aria-label="back to home">
          <img src="/assets/sunwin_logo.png" alt="logo" width="210" height="29" aria-hidden="true" decoding="async" />
        </a>
        <nav className="cs-nav" role="navigation">
          {/* Mobile Nav Toggle Button */}
          <button 
            className={`cs-toggle ${isMenuActive ? 'cs-active' : ''}`} 
            aria-label="mobile menu toggle" 
            aria-expanded={isMenuActive} // Set aria-expanded on the button
            onClick={handleToggle}
          >
            <div className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1" aria-hidden="true"></span>
              <span className="cs-line cs-line2" aria-hidden="true"></span>
              <span className="cs-line cs-line3" aria-hidden="true"></span>
            </div>
          </button>
          {/* Navigation List */}
          <div className="cs-ul-wrapper">
            <ul id="cs-expanded" className="cs-ul">
              <li className="cs-li"><a href="/" className="cs-li-link">Home</a></li>
              <li className="cs-li"><a href="/about" className="cs-li-link">About</a></li>
              <li className="cs-li"><a href="/services" className="cs-li-link">Services</a></li>
              <li className="cs-li nav-contact"><a href="/contact" className="cs-li-link">Contact Us</a></li>
              <li className="cs-li"><a href="/faq" className="cs-li-link">FAQ</a></li>
            </ul>
          </div>
        </nav>
        <a href="/contact" className="cs-button-solid cs-nav-button">Contact Us</a>
      </div>
    </header>
  );
}

export default Header;