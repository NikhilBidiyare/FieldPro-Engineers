import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onPostClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onPostClick }) => {
  return (
    <article 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
      onClick={() => onPostClick(post)}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {post.featured && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-slate-600 mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3">
          {post.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-medium text-slate-800">{post.author.name}</p>
              <p className="text-slate-500">{post.author.title}</p>
            </div>
          </div>
          
          <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors">
            <span className="text-sm font-medium mr-1">Read More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;