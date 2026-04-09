import { Project } from '../types';
import { courses } from './courses';
import { roadmaps } from './roadmaps';

// Extract all projects from courses and roadmaps
const courseProjects = courses.flatMap(c => c.projects);
const roadmapProjects = roadmaps.map(r => r.capstoneProject);

export const projects: Project[] = [...courseProjects, ...roadmapProjects];
