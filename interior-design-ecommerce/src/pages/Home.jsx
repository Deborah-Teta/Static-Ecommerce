import React from 'react';
import HeroSection from '../Components/Hero';
import Header from '../Components/Header';

function Home () {
 
  return (
    <div>
      <Header />
      <HeroSection />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
           {/* Services CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-amber-900 mb-6">Why Choose Feel the Beauty?</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-lg text-amber-800">✨ Carefully curated, premium-quality products</li>
              <li className="text-lg text-amber-800">✨ End-to-end services: from selection to installation</li>
              <li className="text-lg text-amber-800">✨ Affordable luxury you can trust</li>
              <li className="text-lg text-amber-800">✨ 100% Satisfaction Guarantee</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              Start your journey towards a more beautiful, comfortable, and inspiring home with us today!
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;