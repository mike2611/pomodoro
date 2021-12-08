import './App.css';
import './components/Header';
import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Timer from './components/Timer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Timer />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
