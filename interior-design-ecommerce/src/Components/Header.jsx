import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
        
          <header class="fixed w-full bg-gray-800 shadow-md">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 class="font-bold text-2xl shadow-md text-amber-800">Feel the Beauty</h1>
            <nav className='flex space-x-6'>

                <Link to="/Home" className=' text-green-500 hover:text-green-900 transition-colors font-bold'>Home</Link>
                <Link to="/About" className='text-green-500 hover:text-green-900 transition-colors font-bold'>About</Link>
                <Link to="/Product" className='text-green-500 hover:text-green-900 transition-colors font-bold'>Product</Link>
                <Link to="/Contact" className='text-green-500 hover:text-green-900 transition-colors font-bold'>Contact</Link>
            </nav>
            </div>
         </header>    
        
        </>
    )
}
export default Header;