import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === (i18n.language?.split('-')[0] || 'en')) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    
    if (code === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = code;
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group cursor-pointer py-1"
      >
        <Languages className="w-3.5 h-3.5 text-ink/30 group-hover:text-ink transition-colors" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60 group-hover:text-ink transition-colors">
          {currentLang.name}
        </span>
        <ChevronDown className={`w-3 h-3 text-ink/20 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 rtl:left-0 rtl:right-auto top-full mt-2 w-48 bg-paper border editorial-border shadow-xl z-[100] py-2 origin-top-right rtl:origin-top-left"
          >
            <div className="px-4 py-2 border-b editorial-border mb-1">
              <span className="micro-label opacity-40">Select Language</span>
            </div>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 text-[11px] uppercase tracking-widest font-medium transition-colors hover:bg-ink/[0.03] flex items-center justify-between ${
                  i18n.language?.startsWith(lang.code) ? 'text-ink bg-ink/[0.02]' : 'text-ink/60'
                }`}
              >
                {lang.name}
                {i18n.language?.startsWith(lang.code) && (
                  <div className="w-1 h-1 rounded-full bg-ink" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
