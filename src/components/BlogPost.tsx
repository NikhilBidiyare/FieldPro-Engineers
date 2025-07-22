import React from 'react';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types/blog';
import SocialShare from './SocialShare';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 mb-8 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Blog</span>
      </button>
      
      <header className="mb-8">
        <div className="mb-4">
          <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 border-b border-slate-200">
          <div className="flex items-center space-x-4">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-slate-800">{post.author.name}</p>
              <p className="text-slate-600 text-sm">{post.author.title} • {post.author.experience} experience</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-slate-600">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>
      
      <div 
        className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-ul:text-slate-700 prose-li:text-slate-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-12 bg-gradient-to-br from-teal-50 to-orange-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Ready to Partner with Expert Field Engineers?
        </h3>
        <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
          Join leading valuation companies who trust our network of professional field engineers 
          for accurate, timely property inspections across major metropolitan areas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Schedule a Consultation
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            WhatsApp: +91 77730 64835
          </button>
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="mt-12">
        <SocialShare 
          title={`${post.title} - FieldPro Engineers`}
          description={post.summary}
        />
      </div>
    </article>
  );
};

export default BlogPost;