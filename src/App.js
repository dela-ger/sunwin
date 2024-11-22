import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import "./services.css";
import  Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceDetails from './components/ServiceDetails';
import Faq from './components/Faq';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />        {/* Home route */}
        <Route path="/about" element={<About />} />  {/* About route */}
        <Route path="/services" element={<Services />} />  {/* Services route */}
        <Route path="/contact" element={<Contact />} />  {/* Contact route */}
        <Route path="/faq" element={<Faq />} />  {/* Faq route */}

        <Route
          path="/services/manned-guarding"
          element={
            <ServiceDetails
              title="Manned Guarding"
              content={[
                "Our manned guarding services provide robust, reliable security solutions for both corporate and residential properties.",
                "Whether it's 24/7 surveillance, access control, or regular patrolling, our guards are ready to deliver tailored security solutions to meet your specific needs.",
              ]}
              listItems={[
                "Experienced and Professional Team.",
                "Customized Security Solutions.",
                "24/7 Availability and Rapid Response.",
                "Advanced Training and Technology Integration.",
                "Commitment to Customer Satisfaction.",
              ]}
              imageUrl="../assets/mannedguard.jpg"
            />
          }
        />
        
        <Route
          path="/services/vvip-protection"
          element={
            <ServiceDetails
              title="VVIP Protection and Escort"
              content={[
                "Our VVIP protection services offer top-tier security for high-profile individuals, ensuring their safety and privacy at all times.",
                "With discreet and professional security personnel, we provide a trusted service for your most important guests.",
              ]}
              listItems={[
                "Discreet and Professional Security.",
                "Tailored Security Plans.",
                "Rapid and Reliable Escort Services.",
                "Experienced Personnel.",
                "Trusted by High-Profile Clients.",
              ]}
              imageUrl="../assets/vip.jpg"
            />
          }
        />
        <Route
          path="/services/events"
          element={
            <ServiceDetails
              title="Event and Crowd Control"
              content={[
                "Our event and crowd control services ensure safe, organized, and enjoyable experiences for everyone attending your event. Whether \it’s\ a large concert, a corporate function, or a private gathering, we provide experienced personnel trained to manage crowds effectively, control access points, and handle unexpected situations with professionalism. Our team conducts thorough pre-event assessments to identify potential security risks and create detailed crowd management plans tailored to the \event’s\ unique needs.",
                " Equipped with advanced communication tools and crowd control strategies, we help maintain order, safeguard guests, and protect property, allowing you to focus on delivering a successful event. Trust us to provide seamless, dependable crowd control for a smooth, secure experience from start to finish..",
              ]}
              listItems={[
                "Discreet and Professional Security.",
                "Tailored Security Plans.",
                "Rapid and Reliable Escort Services.",
                "Experienced Personnel.",
                "Trusted by High-Profile Clients.",
              ]}
              imageUrl="../assets/crowd.jpg"
            />
          }
        />
        <Route
          path="/services/electronic"
          element={
            <ServiceDetails
              title="Electronic Security Systems"
              content={[
                "Our event and crowd control services ensure safe, organized, and enjoyable experiences for everyone attending your event. Whether \it’s\ a large concert, a corporate function, or a private gathering, we provide experienced personnel trained to manage crowds effectively, control access points, and handle unexpected situations with professionalism. Our team conducts thorough pre-event assessments to identify potential security risks and create detailed crowd management plans tailored to the \event’s\ ",
                "With real-time monitoring and remote access capabilities, our systems give you full control and peace of mind, whether you're on-site or away. Trust us to deliver innovative, scalable electronic security solutions that safeguard what matters most.",
              ]}
              listItems={[
                "State-of-the-Art Technology.",
                "Customized Security Solutions.",
                "Expert Installation and Integration.",
                "24/7 Monitoring and Support.",
                "Remote Access and Real-Time Alerts.",
              ]}
              imageUrl="../assets/camera.jpg"
            />
          }
        />
        <Route
          path="/services/compat"
          element={
            <ServiceDetails
              title="Community Patrols."
              content={[
                "Our community patrol services provide a proactive approach to neighborhood safety, helping to prevent crime and maintain a secure, peaceful environment. Designed for residential communities, business districts, and public spaces, our patrol teams work around the clock to deter suspicious activities, monitor for potential threats, and respond swiftly to incidents. With a visible, approachable presence, our trained patrol officers build trust with residents and community members while remaining vigilant in safeguarding the area.",
                "From regular patrols and property checks to emergency response, our goal is to promote a safe, cohesive community where people can live and work with peace of mind. Let us partner with you to create a secure environment for everyone.",
              ]}
              listItems={[
                "Proactive Crime Prevention.",
                "Experienced and Trained Officers.",
                "Customized Patrol Schedules.",
                "Strong Community Engagement.",
                "Rapid Response and Incident Reporting.",
              ]}
              imageUrl="../assets/community.jpg"
            />
          }
        />
        <Route
          path="/services/gadgets"
          element={
            <ServiceDetails
              title="Supply of Security Gadgets."
              content={[
                "We provide a wide range of high-quality security gadgets designed to enhance the safety and protection of your property. From advanced surveillance cameras and motion detectors to smart alarm systems and access control devices, our products are carefully selected to meet the latest standards in security technology. Whether you're looking to upgrade your existing systems or install new ones, our team offers expert guidance to help you choose the right gadgets for your specific needs.",
                "With reliable and durable products, we ensure that your home or business is equipped with cutting-edge solutions to keep you secure. Trust us to deliver the best in security gadgets, backed by professional installation and ongoing support.",
              ]}
              listItems={[
                "Wide Selection of High-Quality Products.",
                "Expert Guidance and Product Selection.",
                "Seamless Integration and Installation.",
                "Cutting-Edge Technology.",
                "Ongoing Support and Maintenance.",
              ]}
              imageUrl="../assets/gadgets.jpg"
            />
          }
        />
        <Route
          path="/services/general"
          element={
            <ServiceDetails
              title="General Investigations."
              content={[
                "Our general investigation services offer thorough, confidential, and professional support for a wide range of inquiries, whether personal or business-related. We specialize in conducting detailed investigations to uncover critical information, gather evidence, and resolve complex issues. Whether it's background checks, fraud investigations, employee misconduct, or locating missing persons, our experienced investigators utilize proven methods and the latest technology to provide accurate, reliable results.",
                "With discretion and integrity, we ensure that every investigation is handled with the highest level of professionalism, protecting the interests of our clients while maintaining confidentiality throughout the process. Trust us to provide the answers you need with complete confidence.",
              ]}
              listItems={[
                "Experienced and Skilled Investigators.",
                "Confidentiality and Discretion.",
                "Advanced Investigative Tools and Techniques.",
                "Tailored Investigation Services.",
                "Timely and Reliable Results.",
              ]}
              imageUrl="../assets/investigations.jpg"
            />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
