import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import BookServicePage from "./pages/BookService";

function App() {
  return (
    <main className="app-shell" id="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Home />} />
        <Route path="/book-service" element={<BookServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default App;