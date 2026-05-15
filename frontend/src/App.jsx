import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar    from './components/layout/Navbar';
import Footer    from './components/layout/Footer';
import Home      from './pages/Home';
import Catalogue from './pages/Catalogue';
import About     from './pages/About';
import Contact   from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"          element={<Home />}      />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/about"     element={<About />}     />
            <Route path="/contact"   element={<Contact />}   />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;