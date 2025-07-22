import React from 'react';
import { CheckCircle, Clock, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Expert Field Engineers for
            <span className="text-teal-400 block">Property Visits</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Partner with our network of verified freelance field engineers for professional property inspections. 
            Serving valuation companies and banks across Indore, Rau, and Mhow with speed, accuracy, and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-teal-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
            <p className="text-slate-300">Licensed professionals with proven track records</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-teal-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">24-48 Hour Delivery</h3>
            <p className="text-slate-300">Fast turnaround for time-sensitive valuations</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-teal-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Nationwide Coverage</h3>
            <p className="text-slate-300">Engineers in all major metropolitan areas</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-teal-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
            <p className="text-slate-300">Over 5,000 successful property inspections</p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Partner With Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;