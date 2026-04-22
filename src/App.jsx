import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import BookServicePage from "./pages/BookService";
import ServicesPage from "./pages/Services";
import BlogsPage from "./pages/Blogs";
import BlogPostPage from "./pages/BlogPost";

// Service Pages (merged cleanly)
import AcService from "./pages/services/AcService";
import AcRepair from "./pages/services/AcRepair";
import CentralizedAc from "./pages/services/CentralizedAc";
import CopperPiping from "./pages/services/CopperPiping";
import Ducting from "./pages/services/Ducting";

// Additional service pages (from both branches)
import AcGasLeak from "./pages/services/AcGasLeak";
import AcInstallation from "./pages/services/AcInstallation";
import AcScrap from "./pages/services/AcScrap";
import AirCurtain from "./pages/services/AirCurtain";
import CentralizedAirConditioning from "./pages/services/CentralizedAirConditioning";
import CopperPipePlanning from "./pages/services/CopperPipePlanning";

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

        {/* Service Pages */}
        <Route path="/services/ac-repair" element={<AcRepair />} />
        <Route path="/services/ac-service" element={<AcService />} />
        <Route path="/services/centralized-ac" element={<CentralizedAc />} />
        <Route path="/services/copper-piping" element={<CopperPiping />} />
        <Route path="/services/ducting" element={<Ducting />} />

        {/* Additional Service Routes */}
        <Route path="/services/centralized-air-conditioning" element={<CentralizedAirConditioning />} />
        <Route path="/services/copper-pipe-planning" element={<CopperPipePlanning />} />
        <Route path="/services/ac-gas-leak" element={<AcGasLeak />} />
        <Route path="/services/ac-installation" element={<AcInstallation />} />
        <Route path="/services/ac-scrap" element={<AcScrap />} />
        <Route path="/services/air-curtain" element={<AirCurtain />} />
      </Routes>
    </main>
  );
}

export default App;