import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gh-bg text-gh-text selection:bg-gh-blue selection:text-white relative font-sans">
      {/* Subtle Geometric Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg"></div>
        {/* Top glow like GitHub landing page */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gh-blue opacity-[0.04] blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-gh-purple opacity-[0.03] blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <div className="relative">
             {/* Section separator glow */}
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gh-border to-transparent opacity-50"></div>
             <Skills />
          </div>
          <div className="relative">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gh-border to-transparent opacity-50"></div>
             <Experience />
          </div>
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;