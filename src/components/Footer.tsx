import React from 'react';
import { MapPin, Phone, Mail, Clock, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  const shareCompany = () => {
    const shareData = {
      title: 'FieldPro Engineers - Expert Property Inspections',
      text: `🏢 FieldPro Engineers - Professional Property Inspections

📍 Coverage Areas: Indore, Rau, Mhow & Surrounding Areas
📞 Contact: +91 77730 64835 / +91 89628 96206
📧 Email: fieldproengineers@gmail.com

Services:
• Residential Property Inspections
• Commercial Property Assessments
• Portfolio/Bulk Inspections
• Emergency Site Visits
• Quality Assurance Reviews

Partner with us for reliable, accurate property inspections!`,
      url: window.location.origin
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      // Fallback to WhatsApp sharing
      const message = encodeURIComponent(`${shareData.title}\n\n${shareData.text}\n\nVisit: ${shareData.url}`);
      window.open(`https://wa.me/?text=${message}`, '_blank');
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-teal-400" />
              <div>
                <h3 className="text-xl font-bold">FieldPro Engineers</h3>
                <p className="text-slate-300 text-sm">Professional Property Inspections</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Expert field engineers providing comprehensive property inspections 
              for valuation companies and financial institutions.
            </p>
            <button
              onClick={shareCompany}
              className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Share2 className="h-4 w-4" />
              <span>Share Our Services</span>
            </button>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Residential Property Inspections</li>
              <li>Commercial Property Assessments</li>
              <li>Portfolio Inspections</li>
              <li>Urgent Site Visits</li>
              <li>Quality Assurance Reviews</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Coverage Areas</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Indore</li>
              <li>Rau</li>
              <li>Mhow</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">+91 77730 64835</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">fieldproengineers@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-300">
            © 2024 FieldPro Engineers. All rights reserved. | Licensed & Insured Property Inspection Professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;