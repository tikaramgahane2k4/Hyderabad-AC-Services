import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import { blogPosts, BLOG_FALLBACK_IMAGE } from '../data/blogPosts';
import '../styles/blog.css';

const getReadTime = (content) => {
  const plainText = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = plainText.split(' ').filter(Boolean).length;
  const minutes = Math.max(3, Math.round(words / 180));
  return `${minutes} min read`;
};

const keyTakeawaysByCategory = {
  Installation: [
    'Pre-planned installation avoids costly rework and reduces project overruns.',
    'Structured commissioning improves cooling consistency across work zones.',
    'Engineering-first layouts reduce leakage and long-term failure risk.',
    'Professional execution improves asset efficiency from day one.',
  ],
  Maintenance: [
    'Preventive maintenance lowers emergency breakdowns during peak operations.',
    'Routine diagnostics improve efficiency and reduce monthly utility costs.',
    'SLA-driven service increases uptime for business-critical cooling systems.',
    'Early fault detection prevents high-cost compressor failures.',
  ],
  Commercial: [
    'Business-aligned HVAC planning reduces lifecycle and operating costs.',
    'Zone-wise optimization improves comfort while cutting excess energy usage.',
    'Professional operations lower compliance, safety, and reliability risk.',
    'Data-backed service planning improves predictability of OPEX.',
  ],
  default: [
    'Professional HVAC strategy reduces downtime and operational friction.',
    'Optimized cooling systems improve efficiency across business environments.',
    'Preventive controls lower maintenance escalations and risk exposure.',
    'Structured execution protects long-term HVAC investment value.',
  ],
};

const getCategoryLabel = (category) => {
  if (category === 'Commercial') return 'Commercial HVAC';
  return category;
};

function BlogPostDetail() {
  const { slug } = useParams();

  const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug]);

  const keyTakeaways = useMemo(() => {
    if (!post) return keyTakeawaysByCategory.default;
    return keyTakeawaysByCategory[post.category] || keyTakeawaysByCategory.default;
  }, [post]);

  useEffect(() => {
    if (!post) {
      document.title = 'Blog Not Found | Hyderabad AC Services';
      return;
    }

    document.title = `${post.title} | Hyderabad AC Services`;
  }, [post]);

  if (!post) {
    return (
      <div className="b2b-detail-page">
        <div className="b2b-status-box">
          <h1>Blog Not Found</h1>
          <p>The requested article does not exist.</p>
          <Link to="/blog" className="b2b-btn b2b-btn--primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="b2b-detail-page">
      <header className="enterprise-blog-hero" id="overview">
        <div className="enterprise-blog-hero__content">
          <Link to="/blog" className="enterprise-blog-back">Back to Insights</Link>
          <h1>{post.title}</h1>
          <p>Reduce downtime, improve efficiency, and cut operational costs with structured HVAC execution.</p>

          <div className="enterprise-meta-row">
            <span className="enterprise-meta-pill"><FaClock /> {getReadTime(post.content)}</span>
            <span className="enterprise-meta-pill"><FaCalendarAlt /> {new Date(post.createdAt).toLocaleDateString('en-IN')}</span>
            <span className="enterprise-meta-pill">{getCategoryLabel(post.category)}</span>
          </div>
        </div>
      </header>

      <section className="enterprise-feature-image" aria-label="Article feature image">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = BLOG_FALLBACK_IMAGE;
          }}
        />
      </section>

      <main className="enterprise-blog-layout" id="content">
        <article className="enterprise-key-takeaways">
          <h2>Key Takeaways</h2>
          <ul>
            {keyTakeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <section className="enterprise-article-card">
          <div className="enterprise-article-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>

        <section className="enterprise-lead-panel" id="quote">
          <div className="enterprise-lead-panel__head">
            <h2>Need reliable AC maintenance for your business?</h2>
            <p>Get a tailored AMC plan designed for uptime, efficiency, and predictable operating costs.</p>
          </div>
          <div className="enterprise-single-cta">
            <Link to="/book-service" className="b2b-btn b2b-btn--primary">Get AMC Quote</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BlogPostDetail;