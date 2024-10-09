import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import CorporateResponsibility from "./pages/CorporateResponsibility";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Corporate-Responsibility" element={<CorporateResponsibility />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
