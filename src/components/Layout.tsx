import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Masthead() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Catalog', path: '/' },
    { name: 'Roadmaps', path: '/roadmaps' },
    { name: 'Projects', path: '/projects' },
    { name: 'AI Path', path: '/ai-path' },
    { name: 'Universities', path: '/universities' },
  ];

  return (
    <header className="border-b editorial-border bg-paper sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-6 space-y-4">
          <Link to="/" className="text-center group flex flex-col items-center">
            <img 
              src="/logo.png" 
              alt="The One Logo" 
              className="w-16 h-16 mb-2 object-contain hidden" 
              onLoad={(e) => e.currentTarget.classList.remove('hidden')}
              referrerPolicy="no-referrer"
            />
            <h1 className="masthead-text text-5xl sm:text-7xl tracking-[-0.05em] leading-none group-hover:opacity-80 transition-opacity">
              The One
            </h1>
            <p className="micro-label mt-2">Curated excellence in open education</p>
          </Link>
          
          <nav className="flex items-center space-x-8 py-2 border-t border-b editorial-border w-full justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-xs uppercase tracking-widest font-medium transition-colors hover:text-ink",
                  location.pathname === item.path ? "text-ink" : "text-ink/40"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Masthead />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      <footer className="border-t editorial-border py-12 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="masthead-text text-2xl mb-4">The One</h2>
          <p className="text-xs text-ink/40 max-w-md mx-auto leading-relaxed">
            A magazine-style curator of the world's best free university lectures. 
            We list only verified best-of items; more are added weekly.
          </p>
          <div className="mt-6 space-y-4">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Curated by</p>
              <p className="text-sm font-serif italic">Yomna Nasr</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a 
                href="mailto:goudamahmoud244@gmail.com" 
                className="text-[10px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity underline decoration-ink/20 underline-offset-4"
              >
                Email
              </a>
              <a 
                href="https://twitter.com/ygoud21" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity underline decoration-ink/20 underline-offset-4"
              >
                Twitter
              </a>
              <a 
                href="https://threads.net/@nasrvault" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity underline decoration-ink/20 underline-offset-4"
              >
                Threads
              </a>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30 pt-4">
              Released under the MIT License
            </p>
          </div>
          <div className="mt-8 pt-8 border-t editorial-border flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
            <span>© 2026 The One Editorial</span>
            <span>New York — London — Silicon Valley</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
