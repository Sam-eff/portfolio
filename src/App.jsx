import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

