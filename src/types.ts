export type University = 
  | 'Stanford' 
  | 'Harvard' 
  | 'Michigan' 
  | 'MIT' 
  | 'Princeton' 
  | 'UC Berkeley' 
  | 'Columbia' 
  | 'Brown' 
  | 'Cornell'
  | 'Georgia Tech'
  | 'University of Washington'
  | 'University of Oxford'
  | '3Blue1Brown'
  | 'StatQuest';

export type Topic = 
  | 'Computer Science' 
  | 'Mathematics' 
  | 'AI' 
  | 'Machine Learning' 
  | 'Deep Learning' 
  | 'Data Science' 
  | 'Data Analysis'
  | 'NLP' 
  | 'Computer Vision';

export type Level = 'Intro' | 'Intermediate' | 'Advanced';

export type Format = 'Full Course' | 'Playlist' | 'Seminar' | 'Workshop';

export type CertificateStatus = 'Free' | 'Paid' | 'None' | 'Unknown';

export interface Project {
  id: string;
  title: string;
  domain: Topic | 'Systems';
  skillTargets: string[];
  steps: string[];
  definitionOfDone: string;
  suggestedTools: string[];
}

export interface Course {
  id: string;
  title: string;
  university: University;
  topics: Topic[];
  level: Level;
  format: Format;
  certificate: CertificateStatus;
  whyItsGreat: string;
  forWhom: string;
  links: {
    coursePage?: string;
    playlist?: string;
    notes?: string;
  };
  editorialReview: string;
  studyGuide: string;
  projects: Project[];
}

export interface Roadmap {
  id: string;
  title: string;
  why: string;
  forWhom: string;
  prerequisites: string;
  method: string;
  weeklyPlan: { week: number; task: string }[];
  options: string[];
  capstoneProject: Project;
}
