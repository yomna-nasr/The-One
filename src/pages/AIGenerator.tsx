import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleGenAI, Type } from "@google/genai";
import { courses } from '../data/courses';
import { roadmaps } from '../data/roadmaps';
import { Sparkles, ArrowRight, Loader2, BrainCircuit, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface GeneratedPath {
  title: string;
  description: string;
  estimatedTime: string;
  steps: {
    title: string;
    description: string;
    resourceId?: string;
    resourceType: 'course' | 'roadmap' | 'external';
  }[];
}

export default function AIGenerator() {
  const { t } = useTranslation();
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedPath | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generatePath = async () => {
    if (!goal.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Prepare context for Gemini
      const courseContext = courses.map(c => ({
        id: c.id,
        title: c.title,
        topics: c.topics,
        level: c.level
      }));

      const roadmapContext = roadmaps.map(r => ({
        id: r.id,
        title: r.title
      }));

      const prompt = `
        You are an expert academic advisor for "The One", a curated catalog of the world's best university courses.
        A student wants to achieve the following goal: "${goal}"

        Based on our available resources, generate a personalized learning path.
        
        Available Courses: ${JSON.stringify(courseContext)}
        Available Roadmaps: ${JSON.stringify(roadmapContext)}

        If a resource from our catalog fits, use its ID in the "resourceId" field and set "resourceType" correctly.
        If we don't have a specific resource for a step, suggest a general external resource and set "resourceType" to "external".

        The output must be a JSON object matching this schema:
        {
          "title": "A catchy title for the path",
          "description": "A brief overview of why this path works for their goal",
          "estimatedTime": "e.g., 3-6 months",
          "steps": [
            {
              "title": "Step title",
              "description": "What they will learn in this step",
              "resourceId": "ID from the provided lists if applicable",
              "resourceType": "course" | "roadmap" | "external"
            }
          ]
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              estimatedTime: { type: Type.STRING },
              steps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                    resourceId: { type: Type.STRING },
                    resourceType: { type: Type.STRING, enum: ['course', 'roadmap', 'external'] }
                  },
                  required: ['title', 'description', 'resourceType']
                }
              }
            },
            required: ['title', 'description', 'estimatedTime', 'steps']
          }
        }
      });

      const data = JSON.parse(response.text);
      setResult(data);
    } catch (err) {
      console.error('AI Generation Error:', err);
      setError('Failed to generate path. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-[10px] uppercase tracking-widest font-bold">
          <Sparkles className="w-3 h-3" />
          {t('ai.label')}
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold italic px-4">
          {t('ai.title')}
        </h2>
        <p className="text-lg text-ink/60 leading-relaxed font-serif max-w-2xl mx-auto">
          {t('ai.subtitle')}
        </p>
      </section>

      <div className="border editorial-border p-6 sm:p-8 bg-paper/50 backdrop-blur-sm -mx-4 sm:mx-0">
        <div className="space-y-4">
          <label className="micro-label opacity-40">{t('ai.placeholder')}</label>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder={t('ai.placeholder')}
              className="flex-grow bg-transparent border editorial-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ink/20 font-serif italic"
              onKeyDown={(e) => e.key === 'Enter' && generatePath()}
            />
            <button
              onClick={generatePath}
              disabled={loading || !goal.trim()}
              className="px-8 py-3 bg-ink text-paper text-xs uppercase tracking-widest font-bold hover:bg-ink/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('ai.synthesizing')}
                </>
              ) : (
                <>
                  {t('ai.generate')}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          <p className="text-[10px] text-ink/40 italic">
            {t('ai.note')}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 border border-red-200 bg-red-50 text-red-600 text-sm text-center font-serif italic"
          >
            {error}
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="border-l-4 border-ink pl-8 space-y-4">
              <h3 className="text-3xl font-serif font-bold">{result.title}</h3>
              <p className="text-ink/60 font-serif leading-relaxed">{result.description}</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[10px] uppercase tracking-widest font-bold opacity-60">
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {result.estimatedTime}
                </span>
                <span className="flex items-center gap-2">
                  <Target className="w-3 h-3" />
                  {result.steps.length} Milestones
                </span>
              </div>
            </div>

            <div className="grid gap-8">
              {result.steps.map((step, index) => (
                <div key={index} className="group relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full border editorial-border flex items-center justify-center text-[10px] font-bold group-hover:bg-ink group-hover:text-paper transition-colors">
                    {index + 1}
                  </div>
                  {index < result.steps.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-[-32px] w-[1px] bg-ink/10" />
                  )}
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-serif font-bold">{step.title}</h4>
                      <span className={`text-[9px] uppercase tracking-tighter px-1.5 py-0.5 font-medium ${
                        step.resourceType === 'course' ? 'bg-blue-50 text-blue-600' :
                        step.resourceType === 'roadmap' ? 'bg-purple-50 text-purple-600' :
                        'bg-ink/5 text-ink/40'
                      }`}>
                        {step.resourceType}
                      </span>
                    </div>
                    <p className="text-sm text-ink/60 leading-relaxed font-serif">{step.description}</p>
                    
                    {step.resourceId && (
                      <Link
                        to={step.resourceType === 'course' ? `/course/${step.resourceId}` : `/roadmap/${step.resourceId}`}
                        className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold hover:underline gap-1"
                      >
                        View Resource <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t editorial-border text-center">
              <p className="text-xs text-ink/40 italic">
                Satisfied with this path? You can bookmark this page or copy the plan.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!result && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="p-6 border editorial-border space-y-4 opacity-60">
            <BrainCircuit className="w-6 h-6 text-ink/20" />
            <h4 className="font-serif font-bold">{t('ai.context')}</h4>
            <p className="text-xs text-ink/60 leading-relaxed italic">
              {t('ai.contextDesc')}
            </p>
          </div>
          <div className="p-6 border editorial-border space-y-4 opacity-60">
            <Target className="w-6 h-6 text-ink/20" />
            <h4 className="font-serif font-bold">{t('ai.goal')}</h4>
            <p className="text-xs text-ink/60 leading-relaxed italic">
              {t('ai.goalDesc')}
            </p>
          </div>
          <div className="p-6 border editorial-border space-y-4 opacity-60">
            <Clock className="w-6 h-6 text-ink/20" />
            <h4 className="font-serif font-bold">{t('ai.efficiency')}</h4>
            <p className="text-xs text-ink/60 leading-relaxed italic">
              {t('ai.efficiencyDesc')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
