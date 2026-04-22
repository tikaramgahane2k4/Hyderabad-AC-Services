import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function CopperPipePlanning() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>COPPER PIPE PRE-INSTALLATION FOR AIR CONDITIONERS</h1>
        </div>
        
        <div className="service-page-content service-page-content--split">
          <div className="service-page-text">
            <p>
              Avoid the mess of post-construction AC installation! Our copper pipe pre-installation service ensures your air conditioning system is future-ready—concealed, clean, and compliant—right from the construction phase.
            </p>
            
            <h2 className="service-page-subtitle">Why Choose Us?</h2>
            
            <ul className="service-page-list service-page-list--check">
              <li><strong>Professional Planning</strong> We coordinate with your builder or interior designer to install high-quality, insulated copper pipes before false ceiling or wall finishing</li>
              <li><strong>Zero Breakage Later</strong> No need for chiseling walls or damaging tiles when it's time for AC installation</li>
              <li><strong>Perfect Routing & Sizing</strong> Optimized pipe length, slope, and insulation for efficient cooling & longer AC life</li>
              <li><strong>Complete Setup</strong> We include AC drain pipes, AC copper pipe, and all required accessories—all in one go.</li>
            </ul>
            
            <h2 className="service-page-subtitle">Ideal For:</h2>
            <p>
              • New homes & flats • Villas & duplexes • Offices & retail spaces • Builder pre-fitouts • Interior designers & HVAC planners
            </p>
            
            <h2 className="service-page-subtitle">Purpose of Advance Copper Piping</h2>
            <p>
              • Avoids wall chiseling after interior finishes • Enhances aesthetics and insulation efficiency • Allows for faster AC installation later
            </p>
          </div>
          
          <div className="service-page-image">
            <img src="/images/Copper piping.png" alt="Copper Pipe Pre-installation" onError={(e) => { e.target.src = '/images/AC services.jpg' }} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CopperPipePlanning;
