import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function AcRepair() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>AC REPAIR SERVICES IN HYDERABAD</h1>
          <p className="service-page-subtitle" style={{ marginTop: "10px" }}>Fast, Reliable, and Affordable AC Repair Solutions</p>
        </div>
        
        <div className="service-page-content">
          <div className="service-page-text">
            <p>
              Is your air conditioner not cooling properly, making unusual noises, or leaking water? Don't worry — Hyderabad AC Services is here to help! We specialize in professional AC repair services in Hyderabad for all major brands and models. Our skilled technicians diagnose and fix AC problems quickly and efficiently, ensuring your cooling system works like new again. Whether it's a residential or commercial unit, we've got you covered with reliable and affordable AC repair solutions.
            </p>
            
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text" style={{fontWeight: 'bold'}}>Poor Cooling or No Cooling</span></li>
              <li><span className="text" style={{fontWeight: 'bold'}}>AC Not Turning On / Power Supply Issues</span></li>
              <li><span className="text" style={{fontWeight: 'bold'}}>Water Leakage from Indoor Unit</span></li>
              <li><span className="text" style={{fontWeight: 'bold'}}>Gas Leak or Low Refrigerant Levels</span></li>
              <li><span className="text" style={{fontWeight: 'bold'}}>Unusual Noise or Vibration</span></li>
              <li><span className="text" style={{fontWeight: 'bold'}}>Foul Smell or Dust Buildup</span></li>
              <li><span className="text" style={{fontWeight: 'bold'}}>Compressor or PCB Malfunction</span></li>
              <li><span className="text" style={{fontWeight: 'bold'}}>Electrical & Thermostat Issues</span></li>
            </ul>
            
            <p>
              No matter the issue, our experts can handle it! We repair:
            </p>
            
            <h2 className="service-page-subtitle">Our AC Repair Services Include</h2>
            <ul className="service-page-list service-page-list--check">
              <li><strong>Complete AC System Inspection</strong></li>
              <li><strong>Gas Leak Detection & Rectification</strong></li>
              <li><strong>Compressor & Fan Motor Repairs</strong></li>
              <li><strong>Electrical & PCB Board Servicing</strong></li>
              <li><strong>Coil Cleaning & Cooling Efficiency Restoration</strong></li>
              <li><strong>Post-Repair Performance Testing</strong></li>
              <li><strong>Replacement of Damaged Components</strong></li>
            </ul>
            
            <h2 className="service-page-subtitle">Why Choose Hyderabad AC Services?</h2>
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text"><strong>Experienced Technicians</strong> trained in multi-brand AC systems</span></li>
              <li><span className="text"><strong>Quick Response Time</strong> – Same-day or next-day repairs available</span></li>
              <li><span className="text"><strong>Transparent Pricing</strong> – No hidden charges or surprise costs</span></li>
              <li><span className="text"><strong>Genuine Spare Parts</strong> for long-lasting repairs</span></li>
              <li><span className="text"><strong>Service for All AC Brands</strong> – LG, Daikin, Voltas, Carrier, Samsung, Bluestar & more</span></li>
            </ul>
            
            <p style={{ marginTop: "15px" }}>We provide AC repair services across Hyderabad, including: Banjara Hills | Jubilee Hills | Gachibowli | Madhapur | Kukatpally | Kondapur | Begumpet | Manikonda | Secunderabad | and surrounding areas.</p>
            <p style={{ fontWeight: "bold", marginBottom: "25px" }}>A faulty AC can disrupt your comfort and increase energy costs. Let the experts at Hyderabad AC Services bring your system back to life.</p>
            
            <ul className="service-page-list" style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li><strong>Call Hyderabad AC Services today for fast, reliable, and affordable AC Repair in Hyderabad.</strong></li>
              <li><strong>WhatsApp: 8712322475</strong> <span style={{margin: "0 10px"}}>|</span> <strong>Email: info@hyderabadacservices.com</strong></li>
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

export default AcRepair;
