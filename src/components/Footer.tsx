
import React from 'react';
const Footer = () => {
  return <footer className="bg-white py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="/lovable-uploads/c73dd433-5a99-425a-b09e-601397bfbf09.webp" alt="Just Creative Designs" className="h-12 w-auto" />
          </div>
          
          {/* Our Other Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Our Other Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="https://banglore.jcdinteriors.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">End-to-End Interiors</a></li>
              <li><a href="https://kitchen.jcdinteriors.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Modular Kitchens</a></li>
              <li><a href="https://wardrobe.jcdinteriors.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Wardrobe Design</a></li>
              <li><a href="https://kids.jcdinteriors.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Customised Kids Rooms</a></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Contact Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="mailto:info@justcreativedesigns.in" className="hover:text-gray-900 transition-colors">info@justcreativedesigns.in</a></li>
              <li><a href="tel:+91-8884456466" className="hover:text-gray-900 transition-colors">+91-8884456466</a></li>
              <li>
                <a 
                  href="https://g.co/kgs/YuD6V9j" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-900 transition-colors inline-flex items-start"
                >
                  <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-sm">2nd Floor, 334, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102, India</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/jcd_blr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-900 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm">@jcd_blr</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Copyright 2025 Just Creative Designs — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
