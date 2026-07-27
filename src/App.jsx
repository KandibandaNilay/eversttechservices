import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/Services/ServiceDetail'; // Import the new dynamic component
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileAppDevelopment from './pages/Services/MobileAppDevelopment';
import CloudSolutions from './pages/Services/CloudSolutions';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import CyberSecurity from './pages/Services/CyberSecurity';
import AISolutions from './pages/Services/AISolutions';
import DevOps from './pages/Services/DevOps';
import SEO from './pages/Services/SEO';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import Cookies from './pages/Cookies/Cookies';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './components/common/ScrollTop';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          {/* Main Services Page */}
          <Route path="services" element={<Services />} />
          
          {/* Dynamic Service Detail Route (Handles all 18 services) */}
          <Route path="services/:slug" element={<ServiceDetail />} />
          
          {/* Specific static routes (kept for backward compatibility if needed) */}
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/mobile-development" element={<MobileAppDevelopment />} />
          <Route path="services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="services/cyber-security" element={<CyberSecurity />} />
          <Route path="services/ai" element={<AISolutions />} />
          <Route path="services/devops" element={<DevOps />} />
          <Route path="services/seo" element={<SEO />} />
          
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;