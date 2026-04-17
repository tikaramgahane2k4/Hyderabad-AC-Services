import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Link to="/" className="brand">
            <span className="brand-mark">H</span>
            <span className="brand-text">Hyderabad <strong>AC Services</strong></span>
          </Link>

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact" className="cta">Book Now</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-container">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out through any channel below.</p>
        </div>
      </section>
    </>
  );
}
