import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function CentralizedAc() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>CENTRALIZED AIR CONDITIONING</h1>
        </div>
        
        <div className="service-page-content service-page-content--split">
          <div className="service-page-text">
            <p>
              Whether it's a Residential Villa, Commercial Space, Apartment Complex, or Retail Outlet, we provide end-to-end centralized AC solutions customized to your needs.
            </p>
            
            <h2 className="service-page-subtitle">We handle everything from</h2>
            
            <ul className="service-page-list service-page-list--check">
              <li>System Design & Layout Planning</li>
              <li>AC Duct Installation & Insulation</li>
              <li>VRV/VRF, Chiller, or Ducted Split AC Setup</li>
              <li>Precision Zoning & Control Panels</li>
              <li>Commissioning, Testing & Optimization</li>
            </ul>
            
            <p className="service-page-brands">Brands We Work With: Blue Star, Daikin, Carrier, Voltas, and more.</p>
            
            <p style={{ marginTop: "20px" }}>
              Total Comfort. Total Control. Centralized AC Installation in Hyderabad. Upgrade to Central AC—for seamless cooling, energy efficiency, and smarter climate control across your home or office.
            </p>
            
            <div className="service-page-cta">
              <a href="/contact" className="service-page-button">CONTACT US</a>
            </div>
          </div>
          
          <div className="service-page-image">
            <img src="/images/Exhaust Ducting.jpg" alt="Centralized Air Conditioning System" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CentralizedAc;
