import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Course } from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COURSE_DURATION_MAP: Record<string, string> = {
  'mit-6-0001': '12 Weeks',
  'mit-18-06': '15 Weeks',
  'harvard-cs50': '12 Weeks',
  'harvard-stat110': '16 Weeks',
  'berkeley-cs61a': '15 Weeks',
  'mit-6-034': '12 Weeks',
  'stanford-cs229': '10 Weeks',
  'stanford-cs231n': '10 Weeks',
  'stanford-cs224n': '10 Weeks',
  'mit-6-s191': '4 Weeks',
  'cornell-cs4780': '14 Weeks',
  'berkeley-data100': '15 Weeks',
  'harvard-cs109': '12 Weeks',
  'michigan-eecs498': '12 Weeks',
  'statquest-deep-learning': '4 Weeks',
  'columbia-nlp': '12 Weeks',
  'stanford-cs25': '8 Weeks',
  'oxford-nlp': '10 Weeks',
  'uw-cse455': '10 Weeks',
  'mit-6-819': '12 Weeks',
  'brown-csci1470': '12 Weeks',
  'statquest-stats-fundamentals': '3 Weeks',
};

export function getCourseDuration(course: Course): string {
  if (course.duration) {
    return course.duration;
  }
  
  if (COURSE_DURATION_MAP[course.id]) {
    return COURSE_DURATION_MAP[course.id];
  }

  if (course.university === '3Blue1Brown' || course.university === 'StatQuest') {
    return '2-4 Weeks';
  }

  switch (course.format) {
    case 'Full Course':
      if (course.level === 'Intro') return '12-15 Weeks';
      if (course.level === 'Intermediate') return '10-12 Weeks';
      return '12-16 Weeks';
    case 'Playlist':
      return '4-8 Weeks';
    case 'Seminar':
      return '2-4 Weeks';
    case 'Workshop':
      return '1-2 Weeks';
    default:
      return '8-12 Weeks';
  }
}

