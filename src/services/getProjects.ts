import { PROJECTS } from '@/data';
import { TypeProject, TypeReadonly } from '@/types';

export default async function getProject(
  count?: number
): Promise<TypeReadonly<TypeProject, 'array'>> {
  if (!count) return PROJECTS;
  return PROJECTS.slice(0, count);
}
