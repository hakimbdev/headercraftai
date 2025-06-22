
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          AI-Powered Letter Headers
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
          Create professional, personalized letter headers in seconds with intelligent design suggestions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={scrollToGenerator}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg"
          >
            Start Creating
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
            View Examples
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Design</h3>
            <p className="text-slate-600">Smart suggestions based on your document type and organization style</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Preview</h3>
            <p className="text-slate-600">See your header design update in real-time as you make changes</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
            <p className="text-slate-600">Export as PDF or DOCX for immediate use in your documents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
