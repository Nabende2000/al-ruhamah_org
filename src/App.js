import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import GoToTopBtn from './components/GoToTopBtn/GoToTopBtn';
import Footer from './components/footer/Footer';
import { Link, Routes, Route } from 'react-router-dom';
import Donation from './pages/donation_page/Donation'
import Topbar from './components/topbar/Topbar'
import Navbar from './components/navbar/Navbar'
import Bank_details_page from './pages/bank_details_page/Bank_details_page';
import About_us from './pages/about_us/About_us';

function App() {
  return (
   
      <div className="App">
        <GoToTopBtn />
        <Topbar />
        <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/bank-details_page" element={<Bank_details_page />} />
            <Route path="/about-us" element={<About_us />} />
          </Routes>
          <Footer />
      </div>
   

/*
import GoToTopBtn from './components/GoToTopBtn/GoToTopBtn';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import "./App.css"

function App() {
  return (
    <div>
        <GoToTopBtn />
        <Topbar />
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;

*/




  );
}

export default App;
