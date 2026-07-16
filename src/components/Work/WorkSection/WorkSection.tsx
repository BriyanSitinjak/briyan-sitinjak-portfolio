'use client';

import { useMemo, useState } from 'react';

import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import SectionFooter from '@/src/components/SectionFooter';
import { Button } from '@/components/ui/button';
import { LIST_EXPERIENCES } from '@/src/constant/constant';
import WorkGrid from '../WorkGrid';

type WorkStatusFilter = 'all' | 'active' | 'inactive';

const FILTER_OPTIONS: { value: WorkStatusFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

const WorkSection = () => {
  const [statusFilter, setStatusFilter] = useState<WorkStatusFilter>('all');

  const filteredProjects = useMemo(() => {
    if (statusFilter === 'all') {
      return LIST_EXPERIENCES;
    }

    return LIST_EXPERIENCES.filter((project) => project.status === statusFilter);
  }, [statusFilter]);

  const filterCounts = useMemo(
    () => ({
      all: LIST_EXPERIENCES.length,
      active: LIST_EXPERIENCES.filter((project) => project.status === 'active').length,
      inactive: LIST_EXPERIENCES.filter((project) => project.status === 'inactive').length,
    }),
    []
  );

  return (
    <PageShell>
      <PageHeader
        titleBefore="My"
        titleHighlight="Work"
        description="Selected work across EdTech platforms, AI integrations, e-commerce, and agency sites—highlighting production delivery and remote collaboration."
      />

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-12">
        {FILTER_OPTIONS.map(({ value, label }) => (
          <Button
            key={value}
            type="button"
            size="sm"
            variant={statusFilter === value ? 'default' : 'outline'}
            onClick={() => setStatusFilter(value)}
            aria-pressed={statusFilter === value}
          >
            {label}
            <span className="ml-2 text-xs opacity-80">({filterCounts[value]})</span>
          </Button>
        ))}
      </div>

      <WorkGrid projects={filteredProjects} filterKey={statusFilter} />
      <SectionFooter count={filteredProjects.length} label="projects" />
    </PageShell>
  );
};

export default WorkSection;
