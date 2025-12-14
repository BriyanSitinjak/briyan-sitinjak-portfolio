'use client';

import React from 'react';
import ContactHeader from '../ContactHeader';
import SocialGrid from '../SocialGrid';

const ContactSection: React.FC = () => {
  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <SocialGrid />
      </div>
    </main>
  );
};

export default ContactSection;

