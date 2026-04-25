import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight, FaSearch } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import '../styles/blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // SEO optimization using document.title
  useEffect(() => {
    document.title = "Blog | Hyderabad AC Services - Cooling Tips & Guides";
  }, []);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
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
            <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
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
