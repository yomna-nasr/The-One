import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { roadmaps } from '../data/roadmaps';
import { ArrowLeft, CheckCircle2, Calendar, BookOpen, Target } from 'lucide-react';

export default function RoadmapDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const roadmap = roadmaps.find(r => r.id === id);

  if (!roadmap) {
    return (
      <div className="text-center py-24">
        <h2 className="font-serif text-3xl mb-4">Roadmap not found.</h2>
        <Link to="/roadmaps" className="text-xs font-bold uppercase tracking-widest underline">Return to Roadmaps</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/roadmaps" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold mb-12 hover:opacity-60">
        <ArrowLeft className="mr-2 w-3 h-3" /> {t('common.back')} {t('nav.roadmaps')}
      </Link>

      <header className="mb-16">
        <span className="micro-label mb-4 block">{t('nav.roadmaps')}</span>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
          {roadmap.title}
        </h1>
        <p className="text-xl sm:text-2xl font-serif leading-relaxed italic text-ink/80 px-4 sm:px-0">
          {roadmap.why}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-8 space-y-16">
          <section className="px-4 sm:px-0">
            <h2 className="micro-label mb-8">{t('roadmaps.weeklyPlan')}</h2>
            <div className="space-y-0 border-l editorial-border ml-2 font-sans">
              {roadmap.weeklyPlan.map((step) => (
                <div key={step.week} className="relative pl-10 pb-12 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-ink" />
                  <span className="micro-label opacity-40 mb-2 block">{t('roadmaps.week')} {step.week}</span>
                  <p className="text-lg font-serif font-bold leading-tight">
                    {step.task}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 sm:px-0">
            <h2 className="micro-label mb-8">{t('roadmaps.methodology')}</h2>
            <div className="bg-ink/[0.02] border editorial-border p-6 sm:p-8">
              <p className="text-ink/80 leading-relaxed font-serif italic text-lg">
                "{roadmap.method}"
              </p>
            </div>
          </section>

          <section className="px-4 sm:px-0">
            <h2 className="micro-label mb-8">{t('roadmaps.capstone')}</h2>
            <div className="border editorial-border p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">
                  {roadmap.capstoneProject.role ? t(`projects.roles.${roadmap.capstoneProject.role.toLowerCase()}`) : t('projects.roles.junior')}
                </span>
                {roadmap.capstoneProject.isMustOnCV && (
                  <span className="text-[8px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">
                    {t('projects.mustOnCV')}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6">{roadmap.capstoneProject.title}</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="micro-label mb-4 opacity-40">{t('roadmaps.executionSteps')}</h4>
                  <ul className="space-y-3">
                    {roadmap.capstoneProject.steps.map((step, i) => (
                      <li key={i} className="text-sm text-ink/70 flex items-start">
                        <span className="mr-3 font-serif italic opacity-30">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                {roadmap.capstoneProject.suggestedTools && roadmap.capstoneProject.suggestedTools.length > 0 && (
                  <div>
                    <h4 className="micro-label mb-4 opacity-40">{t('projects.tools')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.capstoneProject.suggestedTools.map(tool => (
                        <span key={tool} className="text-[10px] font-medium text-ink/60 bg-ink/5 px-2 py-1 italic">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="pt-8 border-t editorial-border">
                  <h4 className="micro-label mb-4 opacity-40">{t('roadmaps.dod')}</h4>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-ink/40" />
                    <p className="text-lg font-serif italic leading-tight">
                      {roadmap.capstoneProject.definitionOfDone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <section className="lg:sticky lg:top-40">
            <div className="space-y-12">
              <div>
                <h2 className="micro-label mb-4">{t('common.forWhom')}</h2>
                <p className="text-sm text-ink/60 leading-relaxed font-sans">
                  {roadmap.forWhom}
                </p>
              </div>
              
              <div>
                <h2 className="micro-label mb-4">{t('common.prerequisites')}</h2>
                <p className="text-sm text-ink/60 leading-relaxed font-sans">
                  {roadmap.prerequisites}
                </p>
              </div>

              <div>
                <h2 className="micro-label mb-4">{t('roadmaps.options')}</h2>
                <ul className="space-y-4">
                  {roadmap.options.map((option, i) => (
                    <li key={i} className="text-xs text-ink/60 leading-relaxed italic border-l-2 border-line pl-4 font-sans">
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
