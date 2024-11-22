import React from 'react'

export default function Footer () {
  return (
    <footer id="cs-footer-308">
    <div className="cs-container">
      <div className="cs-logo-group">
        <a aria-label="go back to home" className="cs-logo" href="/">
          <img className="cs-logo-img" src="/assets/sunwin_logo.png" alt="logo" width="178" height="32" loading="lazy" decoding="async" />
        </a>
        <p class="cs-text">
                Redefining Security, One Innovation at a Time.
            </p>
      </div>
      <ul className="cs-nav">
        <li className="cs-nav-li"><span className="cs-header">Sitemap</span></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/about">About</a></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/services">Services</a></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/faq">FAQ</a></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/contact">Contact</a></li>
      </ul>
      <ul className="cs-nav">
        <li className="cs-nav-li"><span className="cs-header">Services</span></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/services/manned-guarding">Manned Guarding</a></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/services/vvip-protection">VVIP Protection</a></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/services/events">Event & Crowd Control</a></li>
        <li className="cs-nav-li"><a className="cs-nav-link" href="/services/compat">Community Patrols & more...</a></li>
      </ul>
      <ul className="cs-nav">
        <li className="cs-nav-li"><span className="cs-header">Contact</span></li>
        <li className="cs-nav-li">
          <img className="cs-icon" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone-stroke.svg" alt="phone" width="24" height="24" loading="lazy" decoding="async" />
          <a className="cs-nav-link cs-phone" href="tel: 123-456-7890">(+233) 548-237-413</a>
        </li>
        <li className="cs-nav-li">
          <img className="cs-icon" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/email-stroke.svg" alt="email" width="24" height="24" loading="lazy" decoding="async" />
          <a className="cs-nav-link cs-email" href="mailto:info@sunwinsecurity.com.gh">info@sunwinsecurity.com.gh</a>
        </li>
        <li className="cs-nav-li">
          <img className="cs-icon" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin-stroke.svg" alt="pin" width="24" height="24" loading="lazy" decoding="async" />
          <span className="cs-nav-link cs-address">PO BOX 11044<br /> Greater Accra, North</span>
        </li>
      </ul>
    </div>
    <div className="cs-bottom">
      <span className="cs-copyright">© Copyright 2024 - 
        <a className="cs-copyright-link" href="/">Sunwin Security Services</a>
      </span>
    </div>
  </footer>
  )
}
