import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaSearch } from 'react-icons/fa';
import { blogPosts, BLOG_FALLBACK_IMAGE } from '../data/blogPosts';
import Footer from '../components/Footer';
import '../styles/blog.css';

const FILTER_TABS = ['All', 'Installation', 'Maintenance', 'Cost Saving', 'Commercial HVAC'];

const normalizeCategory = (post) => {
  if (post.category === 'Installation') return 'Installation';
  if (post.category === 'Maintenance') return 'Maintenance';
  if (post.category === 'Commercial') return 'Commercial HVAC';

  const searchable = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase();
  if (searchable.includes('save') || searchable.includes('electricity') || searchable.includes('efficiency')) {
    return 'Cost Saving';
  }

  return 'Cost Saving';
};

const getReadTime = (content) => {
  const plainText = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = plainText.split(' ').filter(Boolean).length;
  const minutes = Math.max(3, Math.round(words / 180));
  return `${minutes} min read`;
};

const BlogGridCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="b2b-blog-card">
    <div className="b2b-blog-card__image-wrap">
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = BLOG_FALLBACK_IMAGE;
        }}
      />
    </div>

    <div className="b2b-blog-card__content">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <div className="b2b-blog-card__meta-row">
        <span><FaClock /> {getReadTime(post.content)}</span>
        <span>{normalizeCategory(post)}</span>
      </div>
    </div>
  </Link>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'B2B Cooling Insights | Hyderabad AC Services';
  }, []);

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesFilter = activeFilter === 'All' || normalizeCategory(post) === activeFilter;
      const searchBlob = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase();
      const matchesSearch = query.length === 0 || searchBlob.includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="b2b-blog-page">
      <header className="b2b-blog-hero">
        <div className="b2b-blog-hero__overlay" aria-hidden="true" />
        <div className="b2b-blog-hero__content">
          <p className="b2b-kicker">B2B Insights Hub</p>
          <h1>Insights &amp; Resources for Smart Cooling Solutions</h1>
          <p>
            Actionable HVAC intelligence for enterprises to reduce downtime, improve efficiency,
            and optimize cooling ROI across offices and commercial facilities.
          </p>
          <div className="b2b-blog-hero__ctas">
            <Link to="/book-service" className="b2b-btn b2b-btn--primary">Get AMC Quote</Link>
            <a href="tel:+919123456789" className="b2b-btn b2b-btn--secondary">Talk to Expert</a>
          </div>
        </div>
      </header>

      <section className="b2b-blog-container" id="all-insights">
        <div className="b2b-section-head">
          <h2>Latest HVAC Insights</h2>
          <p>Concise guides for business owners, admin teams, and facility managers.</p>
        </div>

        <div className="b2b-filters-shell">
          <div className="b2b-search">
            <FaSearch className="b2b-search__icon" />
            <input
              type="text"
              placeholder="Search insights"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="b2b-filter-tabs" role="tablist" aria-label="Blog filters">
            {FILTER_TABS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`b2b-filter-tab${activeFilter === filter ? ' is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="b2b-blog-grid">
            {filteredPosts.map((post) => (
              <BlogGridCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="b2b-no-results">
            <h3>No insights found for your search</h3>
            <p>Try a different keyword or switch the filter to All.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
