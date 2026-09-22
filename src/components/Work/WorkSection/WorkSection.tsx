'use client';

import { Suspense, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';

import PageHeader from '@/src/components/PageHeader';
import PageShell from '@/src/components/PageShell';
import SectionFooter from '@/src/components/SectionFooter';
import { cn } from '@/lib/utils';
import {
  LIST_EXPERIENCES,
  SKILLS,
  getProjectStack,
  getSkillById,
  type SkillId,
} from '@/src/constant/constant';
import WorkGrid from '../WorkGrid';

type WorkStatusFilter = 'all' | 'active' | 'inactive';

const STATUS_OPTIONS: { value: WorkStatusFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

const isSkillId = (value: string | null): value is SkillId =>
  !!value && SKILLS.some((skill) => skill.id === value);

const WorkSectionContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const statusFilter = (searchParams.get('status') as WorkStatusFilter | null) ?? 'all';
  const skillParam = searchParams.get('skill');
  const skillFilter = isSkillId(skillParam) ? skillParam : null;
  const activeSkill = skillFilter ? getSkillById(skillFilter) : null;

  const updateParams = (next: { status?: WorkStatusFilter; skill?: SkillId | null }) => {
    const params = new URLSearchParams(searchParams.toString());

    const status = next.status ?? statusFilter;
    if (status === 'all') {
      params.delete('status');
    } else {
      params.set('status', status);
    }

    const skill = next.skill === undefined ? skillFilter : next.skill;
    if (!skill) {
      params.delete('skill');
    } else {
      params.set('skill', skill);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const filteredProjects = useMemo(() => {
    return LIST_EXPERIENCES.filter((project) => {
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
      const matchesSkill =
        !skillFilter || getProjectStack(project.name).includes(skillFilter);
      return matchesStatus && matchesSkill;
    });
  }, [statusFilter, skillFilter]);

  const statusCounts = useMemo(
    () => ({
      all: LIST_EXPERIENCES.length,
      active: LIST_EXPERIENCES.filter((project) => project.status === 'active').length,
      inactive: LIST_EXPERIENCES.filter((project) => project.status === 'inactive').length,
    }),
    []
  );

  const skillOptions = useMemo(() => {
    const projectNames = LIST_EXPERIENCES.map((project) => project.name);
    return SKILLS.filter(
      (skill) =>
        skill.featured ||
        skill.category === 'frontend' ||
        skill.category === 'mobile' ||
        skill.category === 'ai' ||
        skill.category === 'cms' ||
        skill.category === 'integrations'
    )
      .map((skill) => ({
        skill,
        count: projectNames.filter((name) => getProjectStack(name).includes(skill.id)).length,
      }))
      .filter((item) => item.count > 0)
      .sort((a, b) => a.skill.name.localeCompare(b.skill.name));
  }, []);

  return (
    <PageShell>
      <PageHeader
        titleBefore="My"
        titleHighlight="Work"
        description="Filter by status or stack to find proof for the skills you need: EdTech, AI, e-commerce, and agency delivery."
      />

      <div className="mb-8 flex flex-col items-stretch gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-center sm:gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-white/45">
            Status
          </span>
          <div
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
            role="group"
            aria-label="Filter by status"
          >
            {STATUS_OPTIONS.map(({ value, label }) => {
              const selected = statusFilter === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => updateParams({ status: value })}
                  aria-pressed={selected}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                    selected
                      ? 'bg-accent text-primary'
                      : 'text-white/65 hover:text-white'
                  )}
                >
                  {label}
                  <span className={cn('ml-1.5 text-xs', selected ? 'opacity-80' : 'opacity-50')}>
                    {statusCounts[value]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:min-w-[220px]">
          <span className="text-xs font-medium uppercase tracking-wider text-white/45">
            Stack
          </span>
          <div className="flex items-center gap-2">
            <label htmlFor="work-stack-filter" className="sr-only">
              Filter by stack
            </label>
            <select
              id="work-stack-filter"
              value={skillFilter ?? ''}
              onChange={(event) => {
                const value = event.target.value;
                updateParams({ skill: value ? (value as SkillId) : null });
              }}
              className="h-10 w-full appearance-none rounded-full border border-white/10 bg-white/5 bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat px-4 pr-10 text-sm text-white outline-none transition-colors focus:border-accent"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%9ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              }}
            >
              <option value="" className="bg-primary text-white">
                All stacks
              </option>
              {skillOptions.map(({ skill, count }) => (
                <option key={skill.id} value={skill.id} className="bg-primary text-white">
                  {skill.name} ({count})
                </option>
              ))}
            </select>
            {skillFilter ? (
              <button
                type="button"
                onClick={() => updateParams({ skill: null })}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
                aria-label="Clear stack filter"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {activeSkill ? (
        <p className="mb-6 text-center text-sm text-white/60 sm:mb-8">
          Showing projects that use{' '}
          <span className="font-semibold text-accent">{activeSkill.name}</span>
        </p>
      ) : null}

      {filteredProjects.length > 0 ? (
        <WorkGrid
          projects={filteredProjects}
          filterKey={`${statusFilter}-${skillFilter ?? 'all'}`}
          activeSkill={skillFilter}
        />
      ) : (
        <p className="py-16 text-center text-white/60">
          No projects match this filter. Try another stack or clear filters.
        </p>
      )}

      <SectionFooter count={filteredProjects.length} label="projects" />
    </PageShell>
  );
};

const WorkSection = () => {
  return (
    <Suspense
      fallback={
        <PageShell>
          <PageHeader
            titleBefore="My"
            titleHighlight="Work"
            description="Loading projects…"
          />
        </PageShell>
      }
    >
      <WorkSectionContent />
    </Suspense>
  );
};

export default WorkSection;
