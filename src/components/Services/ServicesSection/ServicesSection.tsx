'use client';

import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import SectionFooter from '@/src/components/SectionFooter';
import { SKILLS } from '@/src/constant/constant';
import TechGrid from '../TechGrid';

const ServicesSection = () => {
  return (
    <PageShell>
      <PageHeader
        titleBefore="Skills"
        titleHighlight="in Context"
        description="Web, mobile, AI, CMS, and platform skills—click any stack with project proof to jump straight to related work."
      />
      <TechGrid />
      <SectionFooter count={SKILLS.length} label="skills mapped to real work" />
    </PageShell>
  );
};

export default ServicesSection;
