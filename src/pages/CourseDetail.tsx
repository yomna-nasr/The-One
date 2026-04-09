import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="text-center py-24">
        <h2 className="font-serif text-3xl mb-4">Resource not found.</h2>
        <Link to="/" className="text-xs font-bold uppercase tracking-widest underline">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold mb-12 hover:opacity-60">
        <ArrowLeft className="mr-2 w-3 h-3" /> Back to Catalog
      </Link>

      <header className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <span className="micro-label">{course.university}</span>
          <span className="w-1 h-1 rounded-full bg-ink/20" />
          <span className="micro-label">{course.topics.join(', ')}</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
          {course.title}
        </h1>
        <div className="flex flex-wrap gap-4 border-t border-b editorial-border py-6">
          <div className="flex flex-col">
            <span className="micro-label opacity-40 mb-1">Level</span>
            <span className="text-xs font-bold uppercase tracking-widest">{course.level}</span>
          </div>
          <div className="w-px bg-line h-10 mx-4 hidden md:block" />
          <div className="flex flex-col">
            <span className="micro-label opacity-40 mb-1">Format</span>
            <span className="text-xs font-bold uppercase tracking-widest">{course.format}</span>
          </div>
          <div className="w-px bg-line h-10 mx-4 hidden md:block" />
          <div className="flex flex-col">
            <span className="micro-label opacity-40 mb-1">Certificate</span>
            <span className="text-xs font-bold uppercase tracking-widest">{course.certificate}</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8 space-y-12">
          <section>
            <h2 className="micro-label mb-6">Editorial Review</h2>
            <p className="text-xl font-serif leading-relaxed italic mb-6">
              {course.editorialReview}
            </p>
            <p className="text-ink/70 leading-relaxed">
              {course.whyItsGreat}
            </p>
          </section>

          <section>
            <h2 className="micro-label mb-6">Study Guide</h2>
            <div className="bg-ink/[0.02] border editorial-border p-8">
              <p className="text-ink/80 leading-relaxed whitespace-pre-wrap">
                {course.studyGuide}
              </p>
            </div>
          </section>

          <section>
            <h2 className="micro-label mb-6">After-Course Projects</h2>
            <div className="space-y-8">
              {course.projects.map(project => (
                <div key={project.id} className="border editorial-border p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="micro-label mb-3 opacity-40">Steps</h4>
                      <ul className="space-y-2">
                        {project.steps.map((step, i) => (
                          <li key={i} className="text-xs text-ink/70 flex items-start">
                            <span className="mr-2 opacity-30">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="micro-label mb-3 opacity-40">Expected Result</h4>
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-ink/40" />
                        <p className="text-sm font-medium italic leading-tight">
                          {project.definitionOfDone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-4 space-y-12">
          <section className="sticky top-40">
            <h2 className="micro-label mb-6">Resources</h2>
            <div className="space-y-4">
              {course.links.coursePage && (
                <a 
                  href={course.links.coursePage} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border editorial-border hover:bg-ink hover:text-paper transition-all group"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">Official Site</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                </a>
              )}
              {course.links.playlist && (
                <a 
                  href={course.links.playlist} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border editorial-border hover:bg-ink hover:text-paper transition-all group"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">YouTube Playlist</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                </a>
              )}
              {course.links.notes && (
                <a 
                  href={course.links.notes} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border editorial-border hover:bg-ink hover:text-paper transition-all group"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">Course Notes</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                </a>
              )}
            </div>

            <div className="mt-12 pt-12 border-t editorial-border">
              <h2 className="micro-label mb-4">For Whom</h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                {course.forWhom}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
