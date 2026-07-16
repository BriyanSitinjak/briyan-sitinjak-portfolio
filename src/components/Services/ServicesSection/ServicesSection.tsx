'use client';

import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import SectionFooter from '@/src/components/SectionFooter';
import { LIST_TECH_MASTERED } from '@/src/constant/constant';
import TechGrid from '../TechGrid';

const ServicesSection = () => {
  return (
    <PageShell>
      <PageHeader
        titleBefore="Technologies"
        titleHighlight="Mastered"
        description="Stack spanning frontend delivery, quality engineering, and operations—from Next.js and TypeScript to Cypress, Jest, SQL Server, and Docker—aligned with how I work on remote product teams."
      />
      <TechGrid />
      <SectionFooter count={LIST_TECH_MASTERED.length} label="technologies mastered" />
    </PageShell>
  );
};

export default ServicesSection;
