import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">{product.price.toLocaleString()} RFW</span>
          <button 
            onClick={handleAddToCart}
            className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-900 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;