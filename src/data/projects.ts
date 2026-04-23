import { Project } from '../types';
import { courses } from './courses';
import { roadmaps } from './roadmaps';
import { standaloneProjects } from './standaloneProjects';

// Extract all projects from courses, roadmaps, and standalone list
const courseProjects = courses.flatMap(c => c.projects);
const roadmapProjects = roadmaps.map(r => r.capstoneProject);

export const projects: Project[] = [
  ...courseProjects, 
  ...roadmapProjects,
  ...standaloneProjects
];
