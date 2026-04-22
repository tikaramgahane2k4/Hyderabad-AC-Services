import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function AcScrap() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>AC SCRAP DEALER IN HYDERABAD</h1>
          <p className="service-page-subtitle" style={{ marginTop: "10px" }}>Sell Your Old ACs for the Best Price in Hyderabad</p>
        </div>
        
        <div className="service-page-content">
          <div className="service-page-text">
            <p>
              At Hyderabad AC Services, we don't just install and maintain air conditioners—we also help you dispose of old, unused, or damaged AC units in a safe, eco-friendly way. As a trusted AC scrap dealer in Hyderabad, we ensure you get the best value for your old air conditioners while contributing to a cleaner environment.
            </p>
            
            <h2 className="service-page-subtitle">Our AC Scrap Services Include:</h2>
            <ul className="service-page-list service-page-list--check">
              <li><strong>Buying old & used split ACs, window ACs, centralized AC units</strong></li>
              <li><strong>Hassle-free pickup from homes, offices & commercial sites</strong></li>
              <li><strong>Instant payment at the best market price</strong></li>
              <li><strong>Eco-friendly dismantling & recycling of AC parts</strong></li>
              <li><strong>Bulk scrap collection for offices, industries & warehouses</strong></li>
            </ul>
            
            <h2 className="service-page-subtitle">Who Can Sell to Us?</h2>
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text"><strong>Homeowners</strong> with old or non-working ACs</span></li>
              <li><span className="text"><strong>Offices</strong> upgrading to new HVAC systems</span></li>
              <li><span className="text"><strong>Factories & warehouses</strong> clearing bulk scrap</span></li>
              <li><span className="text"><strong>Hotels, hospitals & commercial kitchens</strong> replacing old units</span></li>
            </ul>
            
            <h2 className="service-page-subtitle">Why Choose Hyderabad AC Services?</h2>
            <ul className="service-page-list service-page-list--dots">
              <li><span className="text"><strong>Trusted AC experts</strong> in Hyderabad for over a decade</span></li>
              <li><span className="text"><strong>Fair, transparent pricing</strong> for your old AC units</span></li>
              <li><span className="text"><strong>Free doorstep pickup</strong> anywhere in Hyderabad & Secunderabad</span></li>
              <li><span className="text"><strong>Environmentally responsible</strong> recycling methods</span></li>
              <li><span className="text"><strong>Easy & quick process</strong> – just call, schedule & sell</span></li>
            </ul>
            
            <hr style={{margin: "40px 0", border: "0", borderTop: "1px solid #eee"}} />
            
            <h2 className="service-page-subtitle">FAQs</h2>
            
            <div style={{marginBottom: "20px"}}>
              <p style={{fontWeight: "bold", marginBottom: "5px"}}>Q1: Do you provide doorstep pickup for old ACs?</p>
              <p style={{margin: 0}}>Yes, we offer free pickup service across Hyderabad & Secunderabad.</p>
            </div>
            
            <div style={{marginBottom: "20px"}}>
              <p style={{fontWeight: "bold", marginBottom: "5px"}}>Q2: How much can I get for my old AC?</p>
              <p style={{margin: 0}}>Prices depend on AC type, brand & condition. We offer the best scrap rates in Hyderabad.</p>
            </div>
            
            <div style={{marginBottom: "20px"}}>
              <p style={{fontWeight: "bold", marginBottom: "5px"}}>Q3: Do you buy bulk AC scrap from companies?</p>
              <p style={{margin: 0}}>Yes, we specialize in bulk scrap collection from offices, industries & commercial establishments.</p>
            </div>
            
            <div style={{marginBottom: "25px"}}>
              <p style={{fontWeight: "bold", marginBottom: "5px"}}>Q4: Which brands of ACs do you buy?</p>
              <p style={{margin: 0}}>We buy all major brands, including Daikin, LG, Blue Star, Voltas, Mitsubishi, Samsung, Hitachi & more.</p>
            </div>
            
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

export default AcScrap;
