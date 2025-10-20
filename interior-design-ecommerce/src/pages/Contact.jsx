import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    console.log('Form submitted:', data);
    alert('Thank you for contacting us! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question about our products, services, or anything else, our
              team is ready to answer all your questions.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="form-group mb-6">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
            
            <div className="form-group mb-6">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
            
            <div className="form-group mb-6">
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Your Message" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-amber-800 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;