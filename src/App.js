import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// import components
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

// import pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
