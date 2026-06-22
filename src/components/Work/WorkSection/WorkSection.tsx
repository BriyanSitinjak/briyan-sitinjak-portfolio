'use client';

import React from 'react';
import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import WorkGrid from '../WorkGrid';
import WorkFooter from '../WorkFooter';

const WorkSection: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        titleBefore="My"
        titleHighlight="Work"
        description="Selected work across EdTech platforms, AI integrations, e-commerce, and agency sites—highlighting production delivery and remote collaboration."
      />
      <WorkGrid />
      <WorkFooter />
    </PageShell>
  );
};

export default WorkSection;
