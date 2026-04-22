import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function AcInstallation() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>AC INSTALLATION SERVICES IN HYDERABAD</h1>
          <p className="service-page-subtitle" style={{ marginTop: "10px" }}>Professional Air Conditioner Installation for Homes & Businesses</p>
        </div>
        
        <div className="service-page-content">
          <div className="service-page-text">
            <p>
              At Hyderabad AC Services, we specialize in expert AC installation services in Hyderabad for all major brands and models—Split AC, Window AC, Cassette AC, Ductable Units, and Centralized Air Conditioning Systems. Our certified technicians ensure perfect installation, optimal cooling performance, and long-term efficiency for your air conditioner. Whether it's your home, office, showroom, or commercial building, we make sure your cooling system runs smoothly from day one.
            </p>
            
            <h2 className="service-page-subtitle">Why Choose Professional AC Installation?</h2>
            <p>
              Installing an air conditioner isn't just about fixing a unit on the wall—it's about precision, balance, and performance. Improper installation can lead to:
            </p>
            
            <ul className="service-page-list service-page-list--dots" style={{ marginTop: "10px" }}>
              <li><span className="text">Detect leaks accurately using advanced tools</span></li>
              <li><span className="text">Poor cooling efficiency</span></li>
              <li><span className="text">Higher electricity bills</span></li>
              <li><span className="text">Frequent gas leaks and breakdowns</span></li>
              <li><span className="text">Shorter equipment lifespan</span></li>
            </ul>
            <p>Our expert team at Hyderabad AC Services ensures that every AC unit is installed to the manufacturer's specifications, maintaining performance, efficiency, and warranty validity.</p>
            
            <h2 className="service-page-subtitle">Our AC Installation Services Include</h2>
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text"><strong>Split AC Installation</strong> – Wall-mount installation with professional copper piping, insulation, and water drain setup.</span></li>
              <li><span className="text"><strong>Window AC Installation</strong> – Secure fitting and electrical safety checks for residential or office setups.</span></li>
              <li><span className="text"><strong>Ductable & Cassette AC Installation</strong> – Ideal for commercial spaces, showrooms, and restaurants.</span></li>
              <li><span className="text"><strong>Centralized AC Installation</strong> – Design and execution for large-scale HVAC systems.</span></li>
              <li><span className="text"><strong>Copper Pipe Pre-Installation</strong> – Efficient and long-lasting piping setup for new projects.</span></li>
              <li><span className="text"><strong>AC Replacement & Relocation</strong> – Safe AC removal, transfer, and AC reinstallation of existing units.</span></li>
            </ul>
            
            <h2 className="service-page-subtitle">Why Hyderabad AC Services?</h2>
            <ul className="service-page-list service-page-list--check">
              <li><strong>Experienced & Certified Technicians</strong></li>
              <li><strong>Affordable Pricing with No Hidden Charges</strong></li>
              <li><strong>Quality Materials (Copper Pipes, Insulation, Brackets, etc.)</strong></li>
              <li><strong>Installation for All Major Brands (Daikin, LG, Samsung, Voltas, Bluestar, Carrier, etc.)</strong></li>
              <li><strong>Same-Day or Next-Day Installation Service</strong></li>
              <li><strong>Post-Installation Performance Check</strong> We provide AC Installation Services across Hyderabad, including: Banjara Hills | Jubilee Hills | Madhapur | Gachibowli | Kukatpally | Kondapur | Secunderabad | Begumpet | Manikonda | and nearby areas.</li>
            </ul>
            
            <p style={{ fontWeight: "bold", marginTop: "15px", marginBottom: "25px" }}>Don't compromise your comfort with poor installation. Let our professionals handle it for you!</p>
            
            <ul className="service-page-list" style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li><strong>Call Hyderabad AC Services today for fast, reliable, and affordable AC installation in Hyderabad.</strong></li>
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

export default AcInstallation;
