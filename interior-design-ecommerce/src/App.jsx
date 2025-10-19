import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
    console.log('Product added to cart:', product);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/Home" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/Product" element={<Product onAddToCart={handleAddToCart} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App