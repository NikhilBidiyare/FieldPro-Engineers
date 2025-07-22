import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Mail, Copy } from 'lucide-react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  includeCompanyDetails?: boolean;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  url = window.location.href,
  title = "FieldPro Engineers - Expert Property Inspections",
  description = "Professional freelance field engineers providing comprehensive property inspections for valuation companies and banks. Fast, accurate, and reliable service nationwide.",
  includeCompanyDetails = true
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  // Enhanced description with company details
  const companyDetails = includeCompanyDetails ? `

🏢 FieldPro Engineers - Your Trusted Property Inspection Partner
📍 Serving: Indore, Rau, Mhow & Surrounding Areas
📞 Contact: +91 77730 64835 / +91 89628 96206
📧 Email: fieldproengineers@gmail.com

Services:
• Residential Property Inspections
• Commercial Property Assessments  
• Portfolio/Bulk Inspections
• Emergency Site Visits
• Quality Assurance Reviews

Partner with us for reliable, accurate property inspections!` : '';
  
  const fullDescription = description + companyDetails;
  const encodedDescription = encodeURIComponent(fullDescription);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%0A%0A${encodeURIComponent('🏢 FieldPro Engineers - Professional Property Inspections\n📍 Indore, Rau, Mhow\n📞 +91 77730 64835\n✅ 5000+ Successful Inspections')}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%0A%0A${encodeURIComponent('🏢 FieldPro Engineers - Professional Property Inspections\n📍 Indore, Rau, Mhow\n📞 +91 77730 64835')}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%0A%0A${encodedDescription}%0A%0A${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0AVisit: ${url}`
  };

  const copyToClipboard = async () => {
    try {
      const shareText = `${title}\n\n${fullDescription}\n\nVisit: ${url}`;
      await navigator.clipboard.writeText(shareText);
      alert('Company details and link copied to clipboard!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = `${title}\n\n${fullDescription}\n\nVisit: ${url}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Company details and link copied to clipboard!');
    }
  };

  const openShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-xl p-6 border border-teal-100">
      <div className="flex items-center space-x-2 mb-4">
        <Share2 className="h-5 w-5 text-teal-600" />
        <h3 className="text-lg font-semibold text-slate-800">Promote FieldPro Engineers</h3>
      </div>
      
      <p className="text-slate-600 mb-4 text-sm">
        Share our complete company profile with detailed service information
      </p>
      
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => openShare('facebook')}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <Facebook className="h-4 w-4" />
          <span>Facebook</span>
        </button>
        
        <button
          onClick={() => openShare('twitter')}
          className="flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <Twitter className="h-4 w-4" />
          <span>Twitter</span>
        </button>
        
        <button
          onClick={() => openShare('linkedin')}
          className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </button>
        
        <button
          onClick={() => openShare('whatsapp')}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </button>
        
        <button
          onClick={() => openShare('email')}
          className="flex items-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <Mail className="h-4 w-4" />
          <span>Email</span>
        </button>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <Copy className="h-4 w-4" />
          <span>Copy Details</span>
        </button>
      </div>
    </div>
  );
};

export default SocialShare;