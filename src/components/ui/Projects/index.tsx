'use client';
import getProject from '@/services/getProjects';
import { ReactNode, useEffect, useState } from 'react';
import ItemProjects from '../ItemProjects';
import { TypeProject, TypeReadonly } from '@/types';

const Projects = (): ReactNode => {
  const [projects, setProjects] = useState<TypeReadonly<TypeProject, 'array'>>(
    []
  );
  useEffect(() => {
    const fetcher = async () => {
      const response = await getProject();
      setProjects(response);
    };
    fetcher();
  }, []);
  return (
    <>
      {!projects.length && <h3>Empty.</h3>}
      {!!projects.length &&
        projects.map((project) => (
          <ItemProjects key={project.id} {...{ ...project }} />
        ))}
    </>
  );
};

export default Projects;
