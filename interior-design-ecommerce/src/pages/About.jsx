import React from 'react';
import { Link } from 'react-router-dom';
import loveitImg from "../assets/photos/about/loveit.jpeg";
import missionImg from "../assets/photos/about/mission.jpeg"
import visionImg from "../assets/photos/about/vision.jpeg"
import fastDeliveryImg from "../assets/photos/services/fastDelivery.jpeg";
import professionalInstallationImg from "../assets/photos/services/install.jpeg";
import consultingImg from "../assets/photos/services/consult.jpeg";
import customizationImg from "../assets/photos/services/customize.jpeg"

const About = () => {
  return (
    <div className="py-16 px-4 bg-gray-50 pt-24">
      {/* Main About Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Feel the Beauty</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong className="text-orange-500">Feel the Beauty</strong>, we transform houses into homes filled with elegance, comfort, and
              inspiration. We offer high-quality interior design materials — from luxurious living room sets to
              functional kitchen essentials and beautiful decor pieces — crafted to elevate your space and reflect
              your personal style.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img 
            src={loveitImg} 
            alt="Beautiful Living Room Design" 
            className="w-full h-auto rounded-lg shadow-lg"
            />
            
          </div>
        </div>

        {/* Mission Section - Reversed */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 p-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to make high-end home design accessible, affordable, and effortless. We believe everyone
              deserves to live in a beautiful space that brings joy, peace, and pride every day.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img 
            src={missionImg} 
            alt="Modern Kitchen Setup" 
            className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 p-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become the leading provider of premium interior design materials, inspiring thousands of homes to
              embrace beauty, comfort, and personality through every carefully curated piece we offer.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img 
            src={visionImg} 
            alt="Cozy Home Decor" 
            className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why Choose Us?</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-lg text-gray-600">Wide range of curated, stylish products for every room.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-lg text-gray-600">Fast, reliable delivery and professional installation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-lg text-gray-600">Customer-focused service ensuring complete satisfaction.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-lg text-gray-600">Affordable prices without compromising on quality.</span>
            </li>
          </ul>
          <p className="text-xl text-center text-gray-800">
            <strong className="text-orange-500">Feel the Beauty</strong> — Love where you live.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-orange-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Services Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Services</h2>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
              At <strong className="text-orange-500">Feel the Beauty</strong>, we don't just sell interior materials — we deliver dreams, comfort, and
              unforgettable experiences to your home.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Fast Delivery */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img 
              src={fastDeliveryImg} 
              alt="Fast Delivery" 
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4" 
              />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                We ensure your furniture, decor, and essentials reach your doorstep quickly and safely — because you
                deserve to enjoy your new space without delay.
              </p>
            </div>

            {/* Professional Installation */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img 
              src={professionalInstallationImg} 
              alt="Professional Installation" 
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4" 
              />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Professional Installation</h3>
              <p className="text-gray-600">
                Our expert team installs everything for you, ensuring a flawless setup so you can relax and admire the
                beauty unfolding in your home.
              </p>
            </div>

            {/* Interior Design Consulting */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img 
              src={consultingImg} 
              alt="Interior Design Consulting" 
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4" 
              />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Interior Design Consulting</h3>
              <p className="text-gray-600">
                Need help choosing? Our design consultants assist you in selecting materials that perfectly match your
                personality, needs, and dreams.
              </p>
            </div>

            {/* Customization Options */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img 
              src={customizationImg} 
              alt="Customization Options" 
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4" 
              />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Customization Options</h3>
              <p className="text-gray-600">
                From fabric colors to material finishes, we offer custom options to make sure your furniture and decor
                are truly yours — personal and unique.
              </p>
            </div>
          </div>

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
            <Link
          to="/Contact"
          className="inline-block px-8 py-3 bg-amber-700 text-white font-semibold rounded-full no-underline hover:bg-amber-900 hover:text-white"
        >
          Contact Us
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;