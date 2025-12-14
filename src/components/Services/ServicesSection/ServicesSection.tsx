'use client';

import React from 'react';
import ServicesHeader from '../ServicesHeader';
import TechGrid from '../TechGrid';
import ServicesFooter from '../ServicesFooter';

const ServicesSection: React.FC = () => {
  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />
        <TechGrid />
        <ServicesFooter />
      </div>
    </main>
  );
};

export default ServicesSection;

