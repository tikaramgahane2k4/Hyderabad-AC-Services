import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import BookServicePage from "./pages/BookService";
import ServicesPage from "./pages/Services";
import BlogsPage from "./pages/Blogs";
import BlogPostPage from "./pages/BlogPost";

function App() {
  return (
    <main className="app-shell" id="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/book-service" element={<BookServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default App;