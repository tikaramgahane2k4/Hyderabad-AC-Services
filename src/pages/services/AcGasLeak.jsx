import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function AcGasLeak() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1 style={{ fontSize: "1.8rem" }}>BEAT THE HEAT—FIX AC GAS LEAKS FAST WITH OUR EXPERT AC REPAIR SERVICES IN HYDERABAD!</h1>
        </div>
        
        <div className="service-page-content">
          <div className="service-page-text">
            <p>
              Is your air conditioner not cooling like it used to? You may be facing a refrigerant gas leak - one of the most common yet often overlooked issues affecting AC performance. At Hyderabad AC Services, we specialize in AC Gas Leak Rectification Service designed to.
            </p>
            
            <ul className="service-page-list service-page-list--dots" style={{ marginBottom: "15px" }}>
              <li><span className="text">Detect leaks accurately using advanced tools</span></li>
              <li><span className="text">Seal and repair leaks permanently</span></li>
              <li><span className="text">Recharge gas to optimal levels</span></li>
              <li><span className="text">Improve cooling efficiency and extend AC life</span></li>
              <li><span className="text">Reduce electricity bills</span></li>
            </ul>
            
            <p style={{ marginBottom: "25px" }}>
              Our trained AC technicians ensure a safe, environmentally compliant, and cost-effective solution for homes, offices, and commercial spaces.
            </p>
            
            <ul className="service-page-list service-page-list--dots" style={{ listStyleType: "none", marginLeft: 0 }}>
              <li style={{ listStyleType: "none", marginLeft: 0, flexDirection: "column", alignItems: "flex-start" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>• All AC Types Covered</span>
                <span className="text" style={{ marginTop: "5px" }}>Split AC, Cassette AC, Ductable AC, Centralized AC Systems, and more.</span>
              </li>
              <li style={{ listStyleType: "none", marginLeft: 0, flexDirection: "column", alignItems: "flex-start", marginTop: "15px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>• On-Site Reporting</span>
                <span className="text" style={{ marginTop: "5px" }}>Immediate results with leak confirmation.</span>
              </li>
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

export default AcGasLeak;
