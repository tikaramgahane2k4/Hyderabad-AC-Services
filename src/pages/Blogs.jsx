import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "../styles/blog-system.css";

const blogsPageCopy = {
  en: {
    kicker: "Latest Articles",
    title: "Helpful Tips & Resources",
    description: "Learn more about AC maintenance, installation, and care",
  },
  hi: {
    kicker: "नए लेख",
    title: "उपयोगी टिप्स और जानकारी",
    description: "एसी मेंटेनेंस, इंस्टॉलेशन और देखभाल के बारे में विस्तार से जानें।",
  },
  te: {
    kicker: "Kotha Articles",
    title: "Upayogakaramaiana Tips Mariyu Samacharam",
    description: "AC maintenance, installation mariyu care gurinchi vivaranga telusukondi.",
  },
};

function BlogsPage() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const copy = blogsPageCopy[language] ?? blogsPageCopy.en;

  return (
    <div className="blog-system-page">
      <section className="blog-system-hero">
        <p className="blog-system-kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </section>

      <section className="blog-system-list-wrap">
        <div className="blog-system-list">
          {blogs.map((blog, index) => (
            <Link key={blog.id} className="blog-system-list-item" to={`/blog/${blog.slug}`}>
              <span className="blog-system-list-item__index">{String(index + 1).padStart(2, "0")}</span>
              <h2>{siteContent.blogTitles[index] ?? blog.title}</h2>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogsPage;
