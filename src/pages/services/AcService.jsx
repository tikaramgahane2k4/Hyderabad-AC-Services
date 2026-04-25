import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function AcService() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>AC SERVICE IN HYDERABAD</h1>
          <p className="service-page-subtitle" style={{ marginTop: "10px" }}>Reliable Air Conditioner Service & Maintenance Experts</p>
        </div>
        
        <div className="service-page-content">
          <div className="service-page-text">
            <p>
              Beat the heat with Hyderabad AC Services - your trusted experts for AC repair, cleaning, and maintenance services in Hyderabad. We provide professional Split AC, Window AC, Cassette AC, and Centralized AC servicing for homes, offices, and commercial spaces. Our certified technicians ensure your AC delivers powerful cooling, energy efficiency, and long-lasting performance, so you stay comfortable all year round.
            </p>
            
            <h2 className="service-page-subtitle">Why Regular AC Service Matters</h2>
            <p>
              Many people use their air conditioners continuously but forget that AC systems need regular servicing to perform at their best. Dust, debris, and refrigerant leaks can affect cooling efficiency and even damage internal components.
            </p>
            
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text" style={{fontWeight: "bold"}}>Maintain consistent cooling performance</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>Extend the lifespan of your air conditioner</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>Prevent water leakage and foul odors</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>Reduce electricity consumption</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>Improve indoor air quality</span></li>
            </ul>
            
            <h2 className="service-page-subtitle">Our AC Service Includes</h2>
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text"><strong>Complete AC Cleaning</strong> - Indoor and outdoor unit cleaning, coil washing, and dust removal.</span></li>
              <li><span className="text"><strong>Filter and Coil Cleaning</strong> - High-pressure cleaning to restore cooling efficiency.</span></li>
              <li><span className="text"><strong>Drain Line and Water Leak Check</strong> - Prevents water dripping and clogging issues.</span></li>
              <li><span className="text"><strong>Electrical and Performance Check</strong> - Ensures all components are running safely.</span></li>
              <li><span className="text"><strong>Gas Pressure and Cooling Test</strong> - Ensures optimum refrigerant levels.</span></li>
            </ul>
            
            <h2 className="service-page-subtitle">Types of AC We Service</h2>
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text" style={{fontWeight: "bold"}}>Split Air Conditioners</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>Window Air Conditioners</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>Cassette AC Units</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>Ductable and Centralized AC Systems</span></li>
              <li><span className="text" style={{fontWeight: "bold"}}>VRV/VRF Systems</span></li>
            </ul>
            
            <h2 className="service-page-subtitle">Book Your AC Service Today!</h2>
            <p>Do not wait for your AC to fail on a hot summer day. Keep it running efficiently with professional AC servicing from Hyderabad AC Services.</p>
            <ul className="service-page-list" style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li><strong>Call us now at +91 8712322475</strong></li>
              <li><strong>WhatsApp: 8712322475</strong></li>
              <li><strong>Email: info@hyderabadacservices.com</strong></li>
            </ul>
            
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

export default AcService;
