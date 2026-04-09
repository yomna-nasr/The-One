import React from 'react';
import { roadmaps } from '../data/roadmaps';
import { ArrowRight, Clock, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Roadmaps() {
  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <span className="micro-label mb-4 block">Special Feature</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">
          Guided Paths to Mastery
        </h2>
        <p className="text-lg text-ink/60 leading-relaxed font-serif">
          Don't just collect resources. Follow a structured sequence designed by experts 
          to take you from foundational concepts to advanced implementation.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {roadmaps.map((roadmap, index) => (
          <article key={roadmap.id} className="group border editorial-border p-8 hover:bg-ink/[0.02] transition-colors">
            <div className="flex justify-between items-start mb-6">
              <span className="font-serif text-4xl font-black opacity-10">0{index + 1}</span>
              <span className="micro-label px-2 py-1 bg-ink/5">6-10 Weeks</span>
            </div>
            
            <h3 className="font-serif text-3xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-4">
              {roadmap.title}
            </h3>
            
            <p className="text-ink/70 leading-relaxed mb-8 font-serif italic">
              {roadmap.why}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Target className="w-4 h-4 mt-1 text-ink/40" />
                <div>
                  <h4 className="micro-label mb-1">For Whom</h4>
                  <p className="text-xs text-ink/60">{roadmap.forWhom}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="w-4 h-4 mt-1 text-ink/40" />
                <div>
                  <h4 className="micro-label mb-1">Prerequisites</h4>
                  <p className="text-xs text-ink/60">{roadmap.prerequisites}</p>
                </div>
              </div>
            </div>

            <Link 
              to={`/roadmap/${roadmap.id}`}
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform"
            >
              View Roadmap <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
