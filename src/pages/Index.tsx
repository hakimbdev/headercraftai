
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HeaderGenerator from '../components/HeaderGenerator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <HeroSection />
      <HeaderGenerator />
    </div>
  );
};

export default Index;
