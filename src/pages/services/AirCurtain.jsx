import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function AirCurtain() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>AIR CURTAIN INSTALLATION:</h1>
        </div>
        
        <div className="service-page-content">
          <div className="service-page-text">
            <p style={{ fontWeight: "bold", fontSize: "1.05rem", marginBottom: "30px" }}>
              Keep your interiors cool, clean, and energy-efficient with our Air Curtain Installation Service in Hyderabad—ideal for commercial spaces, restaurants, showrooms, hospitals, cold storage, and more.
            </p>
            
            <h2 className="service-page-subtitle">Our air curtains are designed to:</h2>
            
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text"><strong>Prevent hot air, dust, insects, and pollutants from entering</strong></span></li>
              <li><span className="text"><strong>Maintain indoor temperature stability</strong></span></li>
              <li><span className="text"><strong>Enhance energy efficiency of HVAC systems</strong></span></li>
              <li><span className="text"><strong>Improve hygiene in food & healthcare environments</strong></span></li>
            </ul>
            
            <h2 className="service-page-subtitle" style={{ marginTop: "40px" }}>Block the Heat. Stop the Dust. Install an Air Curtain Today!</h2>
            
            <p style={{ fontWeight: "bold" }}>
              We install all leading brands and models, offering custom sizes, quiet operation, and sleek designs for any entrance.
            </p>
            
            <div className="service-page-cta">
              <a href="/contact" className="service-page-button">CONTACT US</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AirCurtain;
