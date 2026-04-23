import React from 'react';
import { useTranslation } from 'react-i18next';
import { University } from '../types';
import { courses } from '../data/courses';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UNIVERSITIES: { name: University; description: string; links: { label: string; url: string }[] }[] = [
  { 
    name: 'MIT', 
    description: 'The Massachusetts Institute of Technology is a global leader in CS and Engineering education through its OpenCourseWare initiative.',
    links: [
      { label: 'MIT OCW', url: 'https://ocw.mit.edu/' },
      { label: 'MIT YouTube', url: 'https://www.youtube.com/user/mit' }
    ]
  },
  { 
    name: 'Stanford', 
    description: 'Stanford University has been at the heart of Silicon Valley, producing many of the foundational courses in AI and ML.',
    links: [
      { label: 'Stanford Online', url: 'https://online.stanford.edu/' },
      { label: 'Stanford CS', url: 'https://cs.stanford.edu/' }
    ]
  },
  { 
    name: 'Harvard', 
    description: 'Harvard University offers world-class introductory and advanced courses, most notably the CS50 series.',
    links: [
      { label: 'Harvard Online', url: 'https://online-learning.harvard.edu/' },
      { label: 'HarvardX', url: 'https://www.edx.org/school/harvardx' }
    ]
  },
  { 
    name: 'UC Berkeley', 
    description: 'UC Berkeley is renowned for its rigorous CS curriculum and contributions to Data Science education.',
    links: [
      { label: 'Berkeley CS', url: 'https://cs.berkeley.edu/' },
      { label: 'Berkeley Data Science', url: 'https://data.berkeley.edu/' }
    ]
  },
  { 
    name: 'Princeton', 
    description: 'Princeton University provides deep, theoretical foundations in algorithms and computer science.',
    links: [
      { label: 'Princeton CS', url: 'https://www.cs.princeton.edu/' }
    ]
  },
  { 
    name: 'Columbia', 
    description: 'Columbia University offers a wide range of high-signal seminars and advanced lectures in AI and NLP.',
    links: [
      { label: 'Columbia Engineering', url: 'https://www.engineering.columbia.edu/' }
    ]
  },
  { 
    name: 'Michigan', 
    description: 'The University of Michigan is a leader in user experience and data science education.',
    links: [
      { label: 'Michigan Online', url: 'https://online.umich.edu/' }
    ]
  },
  { 
    name: 'Brown', 
    description: 'Brown University offers unique, student-centered approaches to computer science education.',
    links: [
      { label: 'Brown CS', url: 'https://cs.brown.edu/' }
    ]
  },
  { 
    name: 'Cornell', 
    description: 'Cornell University is a leader in CS theory, machine learning, and systems research.',
    links: [
      { label: 'Cornell CS', url: 'https://www.cs.cornell.edu/' }
    ]
  },
  { 
    name: 'Georgia Tech', 
    description: 'Georgia Institute of Technology is a pioneer in online education and practical AI applications.',
    links: [
      { label: 'Georgia Tech CS', url: 'https://www.cc.gatech.edu/' }
    ]
  },
  { 
    name: 'University of Washington', 
    description: 'The University of Washington is a powerhouse in data science, NLP, and computer vision.',
    links: [
      { label: 'UW CSE', url: 'https://www.cs.washington.edu/' }
    ]
  },
  { 
    name: 'University of Oxford', 
    description: 'The University of Oxford provides world-class research and foundational education in AI and Deep Learning.',
    links: [
      { label: 'Oxford CS', url: 'https://www.cs.ox.ac.uk/' }
    ]
  },
  {
    name: '3Blue1Brown',
    description: 'Created by Grant Sanderson, 3Blue1Brown is a YouTube channel that uses animation to make complex mathematical concepts intuitive and beautiful.',
    links: [
      { label: 'Official Website', url: 'https://www.3blue1brown.com/' },
      { label: 'YouTube Channel', url: 'https://www.youtube.com/@3blue1brown' },
      { label: 'Summer of Math Expo', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDP5Cgj5pO2sYv5d6n8cjc2V' },
      { label: 'Misc Math/Science', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDOd2Gq7c-Ur2iir8bDjx3tS' }
    ]
  },
  {
    name: 'StatQuest',
    description: 'StatQuest with Josh Starmer breaks down complex Statistics and Machine Learning concepts into small, simple, and easy-to-understand pieces.',
    links: [
      { label: 'Official Website', url: 'https://statquest.org/' },
      { label: 'YouTube Channel', url: 'https://www.youtube.com/@statquest' }
    ]
  }
];

export default function Universities() {
  const { t } = useTranslation();
  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <span className="micro-label mb-4 block">{t('universities.label')}</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 italic px-4">
          {t('universities.title')}
        </h2>
        <p className="text-lg text-ink/60 leading-relaxed font-serif">
          {t('universities.subtitle')}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-0">
        {UNIVERSITIES.map((uni) => {
          const uniCourses = courses.filter(c => c.university === uni.name);
          
          return (
            <article key={uni.name} className="border editorial-border p-8 flex flex-col">
              <h3 className="font-serif text-3xl font-bold mb-4">{uni.name}</h3>
              <p className="text-sm text-ink/60 leading-relaxed mb-8 flex-grow">
                {uni.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="micro-label mb-3 opacity-40">{t('universities.featured')} ({uniCourses.length})</h4>
                  <div className="space-y-2">
                    {uniCourses.length > 0 ? (
                      uniCourses.map(course => (
                        <Link 
                          key={course.id} 
                          to={`/course/${course.id}`}
                          className="flex items-center text-xs font-medium hover:underline group"
                        >
                          {course.title} <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))
                    ) : (
                      <p className="text-[10px] italic opacity-40">More resources being added weekly.</p>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t editorial-border">
                  <h4 className="micro-label mb-3 opacity-40">{t('universities.official')}</h4>
                  <div className="flex flex-wrap gap-4">
                    {uni.links.map(link => (
                      <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[10px] font-bold uppercase tracking-widest hover:underline"
                      >
                        {link.label} <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
