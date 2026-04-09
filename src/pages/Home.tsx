import React, { useState, useMemo } from 'react';
import { courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { University, Topic, Level, Format, CertificateStatus } from '../types';
import { Search, X } from 'lucide-react';

const UNIVERSITIES: University[] = ['Stanford', 'Harvard', 'Michigan', 'MIT', 'Princeton', 'UC Berkeley', 'Columbia', 'Brown', 'Cornell', 'Georgia Tech', 'University of Washington', 'University of Oxford'];
const TOPICS: Topic[] = ['Computer Science', 'Mathematics', 'AI', 'Machine Learning', 'Deep Learning', 'Data Science', 'Data Analysis', 'NLP', 'Computer Vision'];

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedUni, setSelectedUni] = useState<University | 'All'>('All');
  const [selectedTopic, setSelectedTopic] = useState<Topic | 'All'>('All');

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                           course.whyItsGreat.toLowerCase().includes(search.toLowerCase());
      const matchesUni = selectedUni === 'All' || course.university === selectedUni;
      const matchesTopic = selectedTopic === 'All' || course.topics.includes(selectedTopic as Topic);
      return matchesSearch && matchesUni && matchesTopic;
    });
  }, [search, selectedUni, selectedTopic]);

  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">
          The curated path to mastery.
        </h2>
        <p className="text-lg text-ink/60 leading-relaxed font-serif">
          We index only the highest-signal educational resources from the world's leading institutions. 
          No noise, just the canonical best.
        </p>
      </section>

      <div className="sticky top-[140px] z-40 bg-paper/80 backdrop-blur-md border-t border-b editorial-border py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-transparent border editorial-border text-sm focus:outline-none focus:ring-1 focus:ring-ink/20"
            />
          </div>
          
          <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
            <select 
              value={selectedUni}
              onChange={(e) => setSelectedUni(e.target.value as any)}
              className="bg-transparent border editorial-border text-[10px] uppercase tracking-widest font-bold px-3 py-2 outline-none"
            >
              <option value="All">All Universities</option>
              {UNIVERSITIES.map(uni => <option key={uni} value={uni}>{uni}</option>)}
            </select>

            <select 
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value as any)}
              className="bg-transparent border editorial-border text-[10px] uppercase tracking-widest font-bold px-3 py-2 outline-none"
            >
              <option value="All">All Topics</option>
              {TOPICS.map(topic => <option key={topic} value={topic}>{topic}</option>)}
            </select>

            {(selectedUni !== 'All' || selectedTopic !== 'All' || search) && (
              <button 
                onClick={() => { setSelectedUni('All'); setSelectedTopic('All'); setSearch(''); }}
                className="flex items-center text-[10px] uppercase tracking-widest font-bold text-ink/40 hover:text-ink"
              >
                Clear <X className="ml-1 w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="text-center py-24 border editorial-border border-dashed">
            <p className="font-serif italic text-ink/40">No resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
