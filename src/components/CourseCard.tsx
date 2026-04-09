import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <article className="group border-b editorial-border pb-12 mb-12 last:border-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="micro-label">{course.university}</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span className="micro-label">{course.topics.join(', ')}</span>
          </div>
          
          <Link to={`/course/${course.id}`}>
            <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:underline decoration-1 underline-offset-4">
              {course.title}
            </h3>
          </Link>
          
          <p className="text-lg text-ink/80 leading-relaxed mb-6 italic font-serif">
            {course.whyItsGreat}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-2 py-1 bg-ink/5 text-[10px] uppercase tracking-wider font-semibold">
              {course.level}
            </span>
            <span className="px-2 py-1 bg-ink/5 text-[10px] uppercase tracking-wider font-semibold">
              {course.format}
            </span>
            <span className="px-2 py-1 bg-ink/5 text-[10px] uppercase tracking-wider font-semibold">
              Cert: {course.certificate}
            </span>
          </div>
        </div>
        
        <div className="md:col-span-4 flex flex-col justify-between border-l editorial-border pl-8">
          <div>
            <h4 className="micro-label mb-3">For Whom</h4>
            <p className="text-sm text-ink/60 leading-relaxed mb-6">
              {course.forWhom}
            </p>
          </div>
          
          <div className="space-y-3">
            {course.links.coursePage && (
              <a 
                href={course.links.coursePage} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xs font-medium hover:underline"
              >
                Course Page <ExternalLink className="ml-2 w-3 h-3" />
              </a>
            )}
            {course.links.playlist && (
              <a 
                href={course.links.playlist} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xs font-medium hover:underline"
              >
                YouTube Playlist <ExternalLink className="ml-2 w-3 h-3" />
              </a>
            )}
            <Link 
              to={`/course/${course.id}`}
              className="flex items-center text-xs font-bold uppercase tracking-widest pt-4 group-hover:translate-x-1 transition-transform"
            >
              Full Review <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
