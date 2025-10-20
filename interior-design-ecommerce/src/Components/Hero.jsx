import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/photos/for home page/32 Simple Modern Gypsum Ceiling Design Ideas For Living Rooms.jpeg'; // adjust path
function HeroSection () {
  return (
    <section
      id="home"
      className="hero relative h-screen w-full overflow-hidden flex items-center justify-center mb-5"
    >
    
      <div className="hero-background absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Elegant Home Interior" 
          className="w-full  h-full object-cover brightness-70 saturate-120"
        />
      </div>

      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-5 text-center">
        <h1 className="text-6xl font-bold mb-5">Feel the Beauty</h1>
        <p className="text-2xl mb-5">Your dream home is just a step away.</p>
        <p className="text-2xl mb-5">Transform every corner with warmth, elegance, and a touch of your soul.</p>
        <Link
          to="/Product"
          className="inline-block px-8 py-3 bg-amber-700 text-white font-semibold rounded-full no-underline hover:bg-amber-900 hover:text-white"
        >
          Discover Our Collection
        </Link>
      </div>

      {/* <div className="text-white bg-amber-700 shadow-md rounded-lg mt-5 p-4 max-w-xl mx-auto text-center">
        <blockquote>
          "Your home should tell the story of who you are, and be a collection of what you love."
          <span className="font-bold italic block mt-2">— Nate Berkus</span>
        </blockquote>
      </div> */}
    </section>
  );
};

export default HeroSection;
