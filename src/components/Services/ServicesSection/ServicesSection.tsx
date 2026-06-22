'use client';

import React from 'react';
import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import TechGrid from '../TechGrid';
import ServicesFooter from '../ServicesFooter';

const ServicesSection: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        titleBefore="Technologies"
        titleHighlight="Mastered"
        description="Stack spanning frontend delivery, quality engineering, and operations—from Next.js and TypeScript to Cypress, Jest, SQL Server, and Docker—aligned with how I work on remote product teams."
      />
      <TechGrid />
      <ServicesFooter />
    </PageShell>
  );
};

export default ServicesSection;
