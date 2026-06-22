'use client';

import React from 'react';
import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import SocialGrid from '../SocialGrid';

const ContactSection: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        titleBefore="Get In"
        titleHighlight="Touch"
        description="Based in Jakarta (GMT+7) and ready to relocate. I respond quickly to remote contract, freelance, and full-time inquiries—reach out via email or LinkedIn."
      />
      <SocialGrid />
    </PageShell>
  );
};

export default ContactSection;
