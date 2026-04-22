import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import BookServicePage from "./pages/BookService";
import ServicesPage from "./pages/Services";
import BlogsPage from "./pages/Blogs";
import BlogPostPage from "./pages/BlogPost";

// Service Pages
import AcService from "./pages/services/AcService";
import CentralizedAirConditioning from "./pages/services/CentralizedAirConditioning";
import CopperPipePlanning from "./pages/services/CopperPipePlanning";
import Ducting from "./pages/services/Ducting";
import AcGasLeak from "./pages/services/AcGasLeak";
import AcInstallation from "./pages/services/AcInstallation";
import AcRepair from "./pages/services/AcRepair";
import AcScrap from "./pages/services/AcScrap";
import AirCurtain from "./pages/services/AirCurtain";

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
        
        {/* Service Pages Routes */}
        <Route path="/services/ac-service" element={<AcService />} />
        <Route path="/services/centralized-air-conditioning" element={<CentralizedAirConditioning />} />
        <Route path="/services/copper-pipe-planning" element={<CopperPipePlanning />} />
        <Route path="/services/ducting" element={<Ducting />} />
        <Route path="/services/ac-gas-leak" element={<AcGasLeak />} />
        <Route path="/services/ac-installation" element={<AcInstallation />} />
        <Route path="/services/ac-repair" element={<AcRepair />} />
        <Route path="/services/ac-scrap" element={<AcScrap />} />
        <Route path="/services/air-curtain" element={<AirCurtain />} />
      </Routes>
    </main>
  );
}

export default App;