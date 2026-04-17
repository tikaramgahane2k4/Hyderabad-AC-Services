import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <main className="app-shell" id="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default App;
