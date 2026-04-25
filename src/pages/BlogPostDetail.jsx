import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaChevronLeft, FaTag } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import '../styles/blog.css';

const BlogPostDetail = () => {
  const { slug } = useParams();
  
  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = post ? blogPosts.filter(p => p.category === post.category && p.slug !== slug).slice(0, 2) : [];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Hyderabad AC Services`;
      window.scrollTo(0, 0);
    } else {
      document.title = "Article Not Found | Hyderabad AC Services";
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="status-container">
        <h1>404</h1>
        <h2>Oops! Article Not Found</h2>
        <p>The blog post you are looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="back-btn">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="post-detail-container">
      <nav className="post-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/blog">Blog</Link>
        <span>/</span>
        <span style={{ color: '#0B1F33', fontWeight: 500 }}>{post.title}</span>
      </nav>

      <header className="post-header">
        <span className="post-category"><FaTag style={{ marginRight: '5px', fontSize: '12px' }} /> {post.category}</span>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span><FaCalendarAlt style={{ marginRight: '5px' }} /> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span><FaUser style={{ marginRight: '5px' }} /> By Admin</span>
        </div>
      </header>

      <div className="post-featured-image">
        <img src={post.image} alt={post.title} />
      </div>

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      {relatedPosts.length > 0 && (
        <section style={{ marginTop: '80px', borderTop: '1px solid #E2E8F0', paddingTop: '60px' }}>
          <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>Related Articles</h2>
          <div className="blog-grid">
            {relatedPosts.map(p => (
              <Link to={`/blog/${p.slug}`} key={p.id} className="blog-card">
                <div className="blog-card-image" style={{ height: '180px' }}>
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="blog-card-content">
                  <h3 style={{ fontSize: '1.2rem', margin: '0' }}>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <Link to="/blog" className="back-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <FaChevronLeft /> Back to Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPostDetail;
