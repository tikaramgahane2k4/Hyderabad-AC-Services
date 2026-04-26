import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function Ducting() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <div className="service-page-badge">
            <span className="badge-tag">B2B SOLUTIONS</span>
          </div>
          <h1>PRECISION DUCTING SOLUTIONS</h1>
          <p className="service-page-quote">"Engineered Airflow Systems for Commercial & Industrial Excellence"</p>
          <p className="service-page-description">
            Specialized HVAC ducting for enterprises that demand zero tolerance in performance
          </p>
        </div>
        
        <div className="service-page-content service-page-content--split">
          <div className="service-page-text">
            <p className="service-intro">
              At Hyderabad AC Services, we transform HVAC efficiency through precision-engineered 
              ducting solutions. Serving Hyderabad's commercial, industrial, and institutional sectors, 
              we deliver airflow systems that optimize energy consumption while ensuring 
              seamless environmental control.
            </p>
            
            <h2 className="service-page-subtitle">Our Enterprise-Grade Ducting Solutions Include:</h2>
            
            <div className="service-features-grid">
              <div className="feature-card">
                <div className="feature-icon">🌀</div>
                <h3>Custom Duct Design & Engineering</h3>
                <p>CFM-optimized layouts for VRF, chiller plants, and centralized systems</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Industrial Exhaust & Ventilation</h3>
                <p>Heavy-duty systems for factories, labs, and high-occupancy spaces</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Fabrication & Installation</h3>
                <p>Galvanized, aluminum, and stainless steel ductwork to SMACNA standards</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Performance Testing & Balancing</h3>
                <p>Airflow verification, pressure testing, and sound attenuation validation</p>
              </div>
            </div>
            
            <div className="service-page-cta">
              <button className="service-page-button primary-btn" onclick="window.location.href='/contact'">
                <span>GET A FREE DUCTING AUDIT</span>
                <span className="button-arrow">→</span>
              </button>
              <button className="service-page-button secondary-btn" onclick="window.location.href='/blog'">
                <span>VIEW CASE STUDIES</span>
                <span className="button-arrow">→</span>
              </button>
            </div>
            
            <div className="service-trust-badge">
              <div className="trust-item">
                <div className="trust-icon">✓</div>
                <span>SMACNA Certified</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">✓</div>
                <span>ISO 9001:2015 Compliant</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">✓</div>
                <span>20+ Commercial Projects</span>
              </div>
            </div>
          </div>
          
          <div className="service-page-image">
            <div className="image-container">
              <img 
                src="/images/Exhaust Ducting.jpg" 
                alt="Industrial Ducting Installation" 
                className="service-image"
                onError={(e) => { e.target.src = '/images/AC services.jpg' }}
              />
              <div className="image-overlay">
                <div className="image-label">PRECISION FABRICATION WORKSHOP</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Ducting;
