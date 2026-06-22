'use client';

import React from 'react';
import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import ResumeViewer from '../ResumeViewer';

const ResumeSection: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        titleBefore="My"
        titleHighlight="Resume"
        description="ATS-friendly CV covering frontend engineering, remote internships, and infrastructure leadership—updated June 2026."
        compact
      />
      <ResumeViewer />
    </PageShell>
  );
};

export default ResumeSection;
