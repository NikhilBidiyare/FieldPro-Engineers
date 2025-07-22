import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    customerPhone: '',
    companyPhone: '',
    bankName: '',
    companyAddress: '',
    propertyAddress: '',
    message: '',
    serviceType: 'residential'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Partnership Inquiry - FieldPro Engineers*

*Contact Details:*
👤 Name: ${formData.name}
🏢 Company: ${formData.company}
📧 Email: ${formData.email}
📱 Customer Phone: ${formData.customerPhone || 'Not provided'}
☎️ Company Phone: ${formData.companyPhone || 'Not provided'}
🏦 Bank Name: ${formData.bankName || 'Not provided'}
📍 Company Address: ${formData.companyAddress || 'Not provided'}

*Service Requirements:*
🔧 Service Type: ${formData.serviceType === 'residential' ? 'Residential Property Inspections' : 
                   formData.serviceType === 'commercial' ? 'Commercial Property Inspections' : 
                   formData.serviceType === 'portfolio' ? 'Portfolio/Bulk Inspections' : 
                   'General Consultation'}

*Property Details:*
🏠 Property Address: ${formData.propertyAddress || 'Not provided'}

*Project Details:*
${formData.message}

---
*Sent via FieldPro Engineers Website Contact Form*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp with the formatted message
    window.open(whatsappURL, '_blank');
    
    // Show confirmation to user
    alert('Redirecting to WhatsApp with your inquiry details. Please send the message to complete your request.');
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      customerPhone: '',
      companyPhone: '',
      bankName: '',
      companyAddress: '',
      propertyAddress: '',
      message: '',
      serviceType: 'residential'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappNumber = "917773064835";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in partnering with FieldPro Engineers for property inspections. Can we discuss your services?");

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Partner with Professional Field Engineers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to streamline your property inspections? Contact us today to discuss 
            how our network of expert field engineers can support your valuation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <p className="text-slate-600">+91 77730 64835 / +91 89628 96206</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-600">fieldproengineers@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Coverage Areas</p>
                  <p className="text-slate-600">Indore, Rau, Mhow</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-teal-600 to-orange-500 rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-3">Quick Connect via WhatsApp</h4>
              <p className="mb-4">Get instant responses to your inquiries</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="bankName" className="block text-sm font-medium text-slate-700 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    placeholder="e.g., State Bank of India, HDFC Bank, etc."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="customerPhone" className="block text-sm font-medium text-slate-700 mb-2">
                    Customer Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="customerPhone"
                    name="customerPhone"
                    required
                    value={formData.customerPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyPhone" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Phone Number
                  </label>
                  <input
                    type="tel"
                    id="companyPhone"
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="companyAddress" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Address
                </label>
                <textarea
                  id="companyAddress"
                  name="companyAddress"
                  rows={2}
                  value={formData.companyAddress}
                  onChange={handleChange}
                  placeholder="Enter your company's complete address..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-slate-700 mb-2">
                  Property Address for Inspection
                </label>
                <textarea
                  id="propertyAddress"
                  name="propertyAddress"
                  rows={3}
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  placeholder="Enter the complete property address that needs inspection (include landmarks, area details, etc.)..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                  Primary Service Need
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="residential">Residential Property Inspections</option>
                  <option value="commercial">Commercial Property Inspections</option>
                  <option value="portfolio">Portfolio/Bulk Inspections</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your inspection needs, timeline, and geographic coverage requirements..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;