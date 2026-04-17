import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="app-shell" id="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
