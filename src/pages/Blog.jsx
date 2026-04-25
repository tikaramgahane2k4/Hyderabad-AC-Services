import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight, FaSearch } from 'react-icons/fa';
import { blogPosts, BLOG_FALLBACK_IMAGE } from '../data/blogPosts';
import '../styles/blog.css';

// Hook: fires a callback when an element enters the viewport
function useIntersectionObserver(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isVisible;
}

// Individual card with fade-in-on-scroll
const BlogCard = ({ post }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <Link
      to={`/blog/${post.slug}`}
      key={post.id}
      className={`blog-card${isVisible ? ' blog-card--visible' : ''}`}
      ref={ref}
    >
      <div className="blog-card-image">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = BLOG_FALLBACK_IMAGE; }}
        />
        <div className="blog-card-image-overlay" aria-hidden="true" />
      </div>
      <div className="blog-card-content">
        <span className="blog-card-category">{post.category}</span>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="blog-card-footer">
          <span><FaCalendarAlt style={{ marginRight: '5px' }} /> {new Date(post.createdAt).toLocaleDateString()}</span>
          <span style={{ color: '#0c84cc', fontWeight: 600 }}>Read More <FaArrowRight style={{ marginLeft: '5px', fontSize: '12px' }} /></span>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = "Blog | Hyderabad AC Services - Cooling Tips & Guides";
  }, []);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Cooling Insights</h1>
        <p>Expert tips, maintenance guides, and the latest in AC technology.</p>

        <div className="blog-filters">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No articles found</h3>
          <p>Try adjusting your search or category filter.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
