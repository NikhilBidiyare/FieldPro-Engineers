import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import BlogCard from './components/BlogCard';
import BlogPost from './components/BlogPost';
import SocialShare from './components/SocialShare';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { blogPosts } from './data/blogPosts';
import { BlogPost as BlogPostType } from './types/blog';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handlePostClick = (post: BlogPostType) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <BlogPost post={selectedPost} onBack={handleBackToBlog} />
        <ContactForm />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      
      <section id="blog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Expert Insights from the Field
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay informed with industry expertise, best practices, and insights from our 
              network of professional field engineers serving the property valuation industry.
            </p>
          </div>
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onPostClick={handlePostClick}
              />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialShare />
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;