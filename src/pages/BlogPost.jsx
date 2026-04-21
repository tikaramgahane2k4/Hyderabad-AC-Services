import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getBlogBySlug } from "../data/blogs";
import { getLocalizedBlogContent } from "../data/localizedBlogs";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "../styles/blog-system.css";

const blogDetailCopy = {
  en: {
    notFound: "Blog Not Found",
    notFoundDescription: "The requested blog post does not exist.",
    backToBlog: "Back to Blog",
  },
  hi: {
    notFound: "ब्लॉग नहीं मिला",
    notFoundDescription: "मांगा गया ब्लॉग पोस्ट उपलब्ध नहीं है।",
    backToBlog: "ब्लॉग पर वापस",
  },
  te: {
    notFound: "Blog Dorakaledu",
    notFoundDescription: "Meeru adigina blog post dorakaledu.",
    backToBlog: "Blog ki tirigi vellandi",
  },
};

const renderListItem = (item) => {
  if (typeof item === "string") {
    return item;
  }

  return (
    <div className="blog-system-article-list-item-rich">
      <strong>{item.title}</strong>
      {item.text ? <p>{item.text}</p> : null}
    </div>
  );
};

const renderContentBlock = (block, index) => {
  if (block.type === "paragraph") {
    return <p key={`paragraph-${index}`}>{block.text}</p>;
  }

  if (block.type === "heading") {
    if (block.level === 3) {
      return <h3 key={`heading-${index}`}>{block.text}</h3>;
    }

    return <h2 key={`heading-${index}`}>{block.text}</h2>;
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    const listClassName = block.ordered
      ? "blog-system-article-list blog-system-article-list--ordered"
      : "blog-system-article-list";

    return (
      <ListTag key={`list-${index}`} className={listClassName}>
        {block.items.map((item, itemIndex) => (
          <li key={`list-item-${index}-${itemIndex}`}>{renderListItem(item)}</li>
        ))}
      </ListTag>
    );
  }

  if (block.type === "divider") {
    return <hr key={`divider-${index}`} className="blog-system-article-divider" />;
  }

  return null;
};

function BlogPostPage() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const copy = blogDetailCopy[language] ?? blogDetailCopy.en;

  const { slug } = useParams();
  const blog = getBlogBySlug(slug ?? "");
  const localizedBlog = blog ? getLocalizedBlogContent(blog.slug, language) : null;
  const localizedArticleTitle = blog
    ? localizedBlog?.articleTitle ?? siteContent.blogTitles[blog.id - 1] ?? blog.articleTitle
    : "";
  const renderedContent = localizedBlog?.content ?? blog?.content ?? [];

  if (!blog) {
    return (
      <div className="blog-system-page blog-system-page--detail">
        <section className="blog-system-detail-wrap">
          <article className="blog-system-article">
            <h1>{copy.notFound}</h1>
            <p>{copy.notFoundDescription}</p>
            <Link className="blog-system-back-button" to="/blog">
              {copy.backToBlog}
            </Link>
          </article>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-system-page blog-system-page--detail">
      <section className="blog-system-detail-wrap">
        <Link className="blog-system-back-link" to="/blog">
          ← {copy.backToBlog}
        </Link>

        <article className="blog-system-article">
          <h1>{localizedArticleTitle}</h1>
          {renderedContent.map((block, index) => renderContentBlock(block, index))}
        </article>

        <Link className="blog-system-back-button" to="/blog">
          {copy.backToBlog}
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPostPage;
