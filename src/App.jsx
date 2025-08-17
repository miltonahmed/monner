import { Route, Routes } from 'react-router-dom';
import './App.css';
import RootLayouts from './layouts/RootLayouts';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route path="/" element={<HomePage />} />S
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/ service" element={<Services />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
