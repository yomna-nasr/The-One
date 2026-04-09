import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Topic } from '../types';
import { CheckCircle2, Code2, Database, Layout as LayoutIcon, BrainCircuit } from 'lucide-react';

const DOMAINS = ['All', 'Systems', 'Computer Science', 'Mathematics', 'AI', 'Machine Learning', 'Deep Learning', 'Data Science', 'Data Analysis', 'NLP', 'Computer Vision'];

export default function Projects() {
  const [selectedDomain, setSelectedDomain] = useState('All');

  const filteredProjects = projects.filter(p => 
    selectedDomain === 'All' || p.domain === selectedDomain
  );

  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <span className="micro-label mb-4 block">Portfolio Builder</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">
          The Projects Library
        </h2>
        <p className="text-lg text-ink/60 leading-relaxed font-serif">
          Convert your learning into tangible outcomes. Each project is designed 
          to be a significant addition to your professional portfolio.
        </p>
      </section>

      <div className="flex justify-center gap-4 border-t border-b editorial-border py-4 overflow-x-auto">
        {DOMAINS.map(domain => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`text-[10px] uppercase tracking-widest font-bold px-4 py-2 transition-colors ${
              selectedDomain === domain ? 'bg-ink text-paper' : 'hover:bg-ink/5'
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <article key={project.id} className="border editorial-border p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="micro-label">{project.domain}</span>
              <Code2 className="w-4 h-4 text-ink/20" />
            </div>
            
            <h3 className="font-serif text-xl font-bold mb-4">{project.title}</h3>
            
            <div className="flex flex-wrap gap-1 mb-6">
              {project.skillTargets.map(skill => (
                <span key={skill} className="text-[9px] uppercase tracking-tighter bg-ink/5 px-1.5 py-0.5 font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="space-y-4 flex-grow">
              <div>
                <h4 className="micro-label mb-2 opacity-40">Steps</h4>
                <ul className="space-y-2">
                  {project.steps.map((step, i) => (
                    <li key={i} className="text-xs text-ink/70 flex items-start">
                      <span className="mr-2 opacity-30">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t editorial-border">
              <h4 className="micro-label mb-2 opacity-40">Definition of Done</h4>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3 h-3 mt-0.5 text-ink/40" />
                <p className="text-[11px] font-medium italic leading-tight">
                  {project.definitionOfDone}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
