import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest updates and insights.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;