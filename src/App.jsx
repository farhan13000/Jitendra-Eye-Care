import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Frames from './pages/Frames';
import ProductDetails from './pages/ProductDetails';
import Lenses from './pages/Lenses';
import Services from './pages/Services';
import About from './pages/About';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import { Privacy, Terms } from './pages/Legal';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="frames" element={<Frames />} />
        <Route path="frames/:slug" element={<ProductDetails />} />
        <Route path="lenses" element={<Lenses />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
