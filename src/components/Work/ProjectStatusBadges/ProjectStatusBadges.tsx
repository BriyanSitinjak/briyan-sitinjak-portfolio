import { cn } from '@/lib/utils';
import type { ProjectDeployment, ProjectLifecycle } from '@/src/constant/type';

interface ProjectStatusBadgesProps {
  status: ProjectLifecycle;
  deployment: ProjectDeployment;
  className?: string;
}

const lifecycleLabel = (status: ProjectLifecycle) =>
  status === 'inactive' ? 'Inactive' : 'Active';

const deploymentLabel: Record<ProjectDeployment, string> = {
  production: 'Production',
  staging: 'Staging',
  maintenance: 'Maintenance',
};

const lifecycleClass = (status: ProjectLifecycle) =>
  status === 'inactive'
    ? 'bg-zinc-700 text-white'
    : 'bg-emerald-500 text-white';

const deploymentClass: Record<ProjectDeployment, string> = {
  production: 'bg-accent text-primary',
  staging: 'bg-amber-500 text-primary',
  maintenance: 'bg-orange-500 text-white',
};

const ProjectStatusBadges = ({
  status,
  deployment,
  className,
}: ProjectStatusBadgesProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute right-3 top-3 z-10 flex flex-wrap justify-end gap-1.5',
        className
      )}
    >
      <span
        className={cn(
          'rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide sm:text-[11px]',
          lifecycleClass(status)
        )}
      >
        {lifecycleLabel(status)}
      </span>
      <span
        className={cn(
          'rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide sm:text-[11px]',
          deploymentClass[deployment]
        )}
      >
        {deploymentLabel[deployment]}
      </span>
    </div>
  );
};

export default ProjectStatusBadges;
