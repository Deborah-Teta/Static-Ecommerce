import React from 'react';
import ProductCard from '../Components/productCard';
import HeroSection from '../Components/Hero';
import vase from '../assets/photos/Decor/vase.jpeg'
import pillow from '../assets/photos/Decor/pillow.jpeg'
import paint from '../assets/photos/Decor/paint.jpeg'
import clock from '../assets/photos/Decor/clock.jpeg'
import chipsMachine from '../assets/photos/kitchen/chips.jpg'
import kitchenCabinet from '../assets/photos/kitchen/kitchencabinet.jpg'
import sofa from '../assets/photos/livingroom/sofa.jpeg'
import light from '../assets/photos/livingroom/lights.jpeg'

const Home = ({ onAddToCart }) => {
  const featuredProducts = [
      {
        id: 1,
        name: "Vase and Plants",
        price: 40000,
        category: "Decor",
        image: vase,
        description: "Add a touch of nature to your home with this beautiful vase and plants."
      },
      {
        id: 2,
        name: "Throw Pillow",
        price: 20000,
        category: "Decor",
        image: pillow,
        description: "Comfortable and stylish, perfect for any living space."
      },
      {
        id: 3,
        name: "Paintings",
        price: 70000,
        category: "Decor",
        image: paint,
        description: "Add a touch of nature to your home with this beautiful paintings."
      },
      {
        id: 4,
        name: "Clock",
        price: 70000,
        category: "Decor",
        image: clock,
        description: "Add a touch of culture to your home with this awesome clock."
      },
      {
        id: 5,
        name: "Chips Maker Machine",
        price: 97000,
        category: "Kitchen",
        image: chipsMachine,
        description: "Essential tool to makes your cooking experience quicker and more enjoyable."
      },
      {
        id: 6,
        name: "Kitchen Cabinet",
        price: 149000,
        category: "Kitchen",
        image: kitchenCabinet,
        description: "Storage solutions that enhance your kitchen's functionality and style."
      },
      {
        id: 7,
        name: "Living Room Sofa",
        price: 250000,
        category: "Living Room",
        image: sofa,
        description: "Comfortable and stylish seating for your living room."
      },
      {
        id: 8,
        name: "Living Room Lights",
        price: 42000,
        category: "Living Room",
        image: light,
        description: "Brighten up your space with this modern and elegant lamp."
      }
    ];
  

  return (
    <div>
      <HeroSection />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;