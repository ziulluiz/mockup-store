
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Carousel } from './components/carousel/Carousel';
import { Cards } from './components/cards/Cards';
import { ProductDetail } from './components/product_detail/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <Carousel />
    <Cards />
  </>
);

export default App;
