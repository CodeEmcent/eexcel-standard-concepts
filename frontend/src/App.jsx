import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home      from './pages/Home';
import Catalogue from './pages/Catalogue';
import About     from './pages/About';
import Contact   from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"          element={<Home />}      />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/about"     element={<About />}     />
        <Route path="/contact"   element={<Contact />}   />
      </Routes>
    </Router>
  );
};

export default App;