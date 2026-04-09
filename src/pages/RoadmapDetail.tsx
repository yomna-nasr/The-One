import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { roadmaps } from '../data/roadmaps';
import { ArrowLeft, CheckCircle2, Calendar, BookOpen, Target } from 'lucide-react';

export default function RoadmapDetail() {
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
        <ArrowLeft className="mr-2 w-3 h-3" /> Back to Roadmaps
      </Link>

      <header className="mb-16">
        <span className="micro-label mb-4 block">Learning Path</span>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
          {roadmap.title}
        </h1>
        <p className="text-2xl font-serif leading-relaxed italic text-ink/80">
          {roadmap.why}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8 space-y-16">
          <section>
            <h2 className="micro-label mb-8">The Weekly Plan</h2>
            <div className="space-y-0 border-l editorial-border ml-2">
              {roadmap.weeklyPlan.map((step) => (
                <div key={step.week} className="relative pl-10 pb-12 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-ink" />
                  <span className="micro-label opacity-40 mb-2 block">Week {step.week}</span>
                  <p className="text-lg font-serif font-bold leading-tight">
                    {step.task}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="micro-label mb-8">Methodology</h2>
            <div className="bg-ink/[0.02] border editorial-border p-8">
              <p className="text-ink/80 leading-relaxed font-serif italic text-lg">
                "{roadmap.method}"
              </p>
            </div>
          </section>

          <section>
            <h2 className="micro-label mb-8">Capstone Project</h2>
            <div className="border editorial-border p-8">
              <h3 className="font-serif text-3xl font-bold mb-6">{roadmap.capstoneProject.title}</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="micro-label mb-4 opacity-40">Execution Steps</h4>
                  <ul className="space-y-3">
                    {roadmap.capstoneProject.steps.map((step, i) => (
                      <li key={i} className="text-sm text-ink/70 flex items-start">
                        <span className="mr-3 font-serif italic opacity-30">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 border-t editorial-border">
                  <h4 className="micro-label mb-4 opacity-40">Definition of Done</h4>
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

        <div className="md:col-span-4 space-y-12">
          <section className="sticky top-40">
            <div className="space-y-12">
              <div>
                <h2 className="micro-label mb-4">For Whom</h2>
                <p className="text-sm text-ink/60 leading-relaxed">
                  {roadmap.forWhom}
                </p>
              </div>
              
              <div>
                <h2 className="micro-label mb-4">Prerequisites</h2>
                <p className="text-sm text-ink/60 leading-relaxed">
                  {roadmap.prerequisites}
                </p>
              </div>

              <div>
                <h2 className="micro-label mb-4">Pick-One Options</h2>
                <ul className="space-y-4">
                  {roadmap.options.map((option, i) => (
                    <li key={i} className="text-xs text-ink/60 leading-relaxed italic border-l-2 border-line pl-4">
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
