import React from 'react';

function Footer () {
    return(
        <>
        <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
        <p>&copy; 2025 Feel the Beauty. All rights reserved.</p>
        <p className="mt-2">Contact us at: <a href="mailto:contact@feelthebeauty.com" className="text-red-400">contact@feelthebeauty.com</a></p>
        <div className="mt-4">
          <a href="https://facebook.com" className="mx-2 hover:text-red-400">Facebook</a> | 
          <a href="https://instagram.com" className="mx-2 hover:text-red-400">Instagram</a>
        </div>
      </div>
        </footer>  
        </>
    )
}
export default Footer