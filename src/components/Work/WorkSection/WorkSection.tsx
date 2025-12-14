'use client';

import React from 'react';
import WorkHeader from '../WorkHeader';
import WorkGrid from '../WorkGrid';
import WorkFooter from '../WorkFooter';

const WorkSection: React.FC = () => {
  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WorkHeader />
        <WorkGrid />
        <WorkFooter />
      </div>
    </main>
  );
};

export default WorkSection;

