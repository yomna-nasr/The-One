import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { Topic } from '../types';
import { CheckCircle2, Code2, Database, Layout as LayoutIcon, BrainCircuit } from 'lucide-react';

const DOMAIN_MAP: Record<string, string> = {
  'All': 'search.domains.all',
  'Systems': 'search.domains.systems',
  'Computer Science': 'search.domains.cs',
  'Mathematics': 'search.domains.math',
  'AI': 'search.domains.ai',
  'Machine Learning': 'search.domains.ml',
  'Deep Learning': 'search.domains.dl',
  'Data Science': 'search.domains.ds',
  'Data Analysis': 'search.domains.da',
  'NLP': 'search.domains.nlp',
  'Computer Vision': 'search.domains.cv'
};

const DOMAINS = Object.keys(DOMAIN_MAP);
const LEVELS = ['All', 'Intro', 'Intermediate', 'Advanced'];

const LEVEL_PRIORITY: Record<string, number> = {
  'Intro': 0,
  'Intermediate': 1,
  'Advanced': 2
};

const LEVEL_MAP: Record<string, string> = {
  'All': 'search.levels.all',
  'Intro': 'search.levels.intro',
  'Intermediate': 'search.levels.intermediate',
  'Advanced': 'search.levels.advanced'
};

export default function Projects() {
  const { t } = useTranslation();
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredProjects = projects
    .filter(p => 
      (selectedDomain === 'All' || p.domain === selectedDomain) &&
      (selectedLevel === 'All' || p.level === selectedLevel)
    )
    .sort((a, b) => (LEVEL_PRIORITY[a.level] || 0) - (LEVEL_PRIORITY[b.level] || 0));

  return (
    <div className="space-y-8 sm:space-y-16">
      <section className="text-center max-w-3xl mx-auto px-4">
        <span className="micro-label mb-4 block">{t('projects.label')}</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 italic">
          {t('projects.title')}
        </h2>
        <p className="text-base sm:text-lg text-ink/60 leading-relaxed font-serif">
          {t('projects.subtitle')}
        </p>
      </section>

      <div className="space-y-4">
        {/* Domain Filter */}
        <div className="sticky top-[100px] sm:top-[140px] z-40 bg-paper/80 backdrop-blur-md flex justify-start sm:justify-center gap-4 border-t border-b editorial-border py-4 overflow-x-auto no-scrollbar scroll-smooth -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex gap-2 sm:gap-4">
            {DOMAINS.map(domain => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`text-[10px] uppercase tracking-widest font-bold px-3 sm:px-4 py-2 transition-colors whitespace-nowrap ${
                  selectedDomain === domain ? 'bg-ink text-paper' : 'hover:bg-ink/5'
                }`}
              >
                {t(DOMAIN_MAP[domain])}
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div className="flex justify-center gap-4 overflow-x-auto no-scrollbar py-2">
          {LEVELS.map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`text-[9px] uppercase tracking-tighter font-bold px-4 py-1.5 rounded-full border transition-all ${
                selectedLevel === level 
                  ? 'bg-ink text-paper border-ink' 
                  : 'bg-transparent text-ink/40 border-ink/10 hover:border-ink/20'
              }`}
            >
              {t(LEVEL_MAP[level])}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map(project => (
          <article key={project.id} className="border editorial-border p-5 sm:p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="micro-label">{project.domain}</span>
              <div className="flex items-center gap-2">
                {project.isMustOnCV && (
                  <span className="text-[8px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">
                    {t('projects.mustOnCV')}
                  </span>
                )}
                <span className={`text-[9px] uppercase tracking-tighter font-bold px-2 py-0.5 border rounded-full ${
                  project.level === 'Intro' ? 'border-green-500/20 text-green-600 bg-green-500/5' :
                  project.level === 'Intermediate' ? 'border-blue-500/20 text-blue-600 bg-blue-500/5' :
                  'border-purple-500/20 text-purple-600 bg-purple-500/5'
                }`}>
                  {t(LEVEL_MAP[project.level])}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold mb-1">{project.title}</h3>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest font-bold opacity-30">
                  {project.role ? t(`projects.roles.${project.role.toLowerCase()}`) : t('projects.roles.junior')}
                </span>
                {project.possiblePositions && project.possiblePositions.length > 0 && (
                  <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                    {project.possiblePositions.map(pos => (
                      <span key={pos} className="text-[8px] font-bold text-ink/40 uppercase tracking-tighter">
                        {pos}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-6">
              {project.skillTargets.map(skill => (
                <span key={skill} className="text-[9px] uppercase tracking-tighter bg-ink/5 px-1.5 py-0.5 font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="space-y-6 flex-grow">
              <div>
                <h4 className="micro-label mb-2 opacity-40">{t('projects.steps')}</h4>
                <ul className="space-y-2">
                  {project.steps.map((step, i) => (
                    <li key={i} className="text-xs text-ink/70 flex items-start">
                      <span className="mr-2 opacity-30">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {project.suggestedTools && project.suggestedTools.length > 0 && (
                <div>
                  <h4 className="micro-label mb-2 opacity-40">{t('projects.tools')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.suggestedTools.map(tool => (
                      <span key={tool} className="text-[10px] font-medium text-ink/60 bg-ink/5 px-2 py-1 italic">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t editorial-border">
              <h4 className="micro-label mb-2 opacity-40">{t('projects.dod')}</h4>
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
