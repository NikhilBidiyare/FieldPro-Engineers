import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-teal-600" />
              <div>
                <h1 className="text-xl font-bold text-slate-800">FieldPro Engineers</h1>
                <p className="text-sm text-slate-600">Professional Property Inspections</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-teal-600 transition-colors">Home</a>
            <a href="#about" className="text-slate-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#services" className="text-slate-700 hover:text-teal-600 transition-colors">Services</a>
            <a href="#contact" className="text-slate-700 hover:text-teal-600 transition-colors">Contact</a>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91 77730 64835</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>fieldproengineers@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;