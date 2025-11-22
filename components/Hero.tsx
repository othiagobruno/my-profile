import React, { useState, useEffect } from 'react';
import { PROFILE } from '../constants';
import { Terminal, ArrowRight, Code, GitBranch, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Visual Background: Globe/Network Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] opacity-20 pointer-events-none">
         <div className="w-full h-full rounded-full border border-gh-border animate-[spin_60s_linear_infinite]" 
              style={{ background: 'radial-gradient(circle, rgba(88,166,255,0.1) 0%, transparent 70%)' }}></div>
         <div className="absolute inset-10 rounded-full border border-gh-border animate-[spin_40s_linear_infinite_reverse] opacity-50"></div>
         <div className="absolute inset-20 rounded-full border border-dashed border-gh-muted animate-[spin_20s_linear_infinite]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Text Content */}
        <div className="lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             {/* Status Badge - Like GitHub Issue Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gh-border bg-gh-subtle mb-6 hover:border-gh-blue/50 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gh-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gh-green"></span>
              </span>
              <span className="text-xs font-medium text-gh-text">Available for hire</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Thiago Bruno <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gh-blue to-gh-purple">
                Miranda
              </span>
            </h1>

            <div className="flex items-center gap-3 text-gh-muted font-mono text-lg md:text-xl mb-8 bg-gh-subtle/50 w-fit px-4 py-2 rounded-lg border border-gh-border">
               <span className="text-gh-orange">const</span>
               <span className="text-gh-blue">role</span>
               <span className="text-gh-text">=</span>
               <span className="text-gh-green">
                 "<TypewriterEffect text={PROFILE.title} />"
               </span>
               <span className="animate-pulse text-gh-muted">|</span>
            </div>

            <p className="text-gh-text opacity-70 leading-relaxed max-w-2xl mb-10">
              {PROFILE.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gh-green hover:bg-[#2ea043] text-white font-bold border border-[rgba(240,246,252,0.1)] shadow-sm transition-all"
              >
                <Terminal className="mr-2 w-5 h-5" />
                Contact Me
              </a>
              
              <a 
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gh-subtle hover:bg-gh-hover text-gh-blue font-semibold border border-gh-border transition-all"
              >
                View Contribution
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Stats / "ReadMe" Stats Area */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex items-center gap-8 text-sm text-gh-muted"
          >
             <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gh-orange" fill="currentColor" />
                <span><strong>8+</strong> Years Exp.</span>
             </div>
             <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-gh-blue" />
                <span><strong>50+</strong> Projects</span>
             </div>
             <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gh-purple" />
                <span><strong>Full Stack</strong> Expert</span>
             </div>
          </motion.div>
        </div>

        {/* Visual: Code Window / Terminal */}
        <div className="lg:w-5/12 w-full relative">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative z-10"
           >
              {/* Window Chrome */}
              <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-gh-border shadow-2xl shadow-black/50">
                 <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gh-border">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <div className="ml-4 text-xs text-gh-muted font-mono flex-1 text-center pr-16">profile.tsx</div>
                 </div>
                 
                 {/* Code Content */}
                 <div className="p-6 font-mono text-sm leading-6 overflow-x-auto">
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">1</span>
                       <span className="text-gh-purple">interface</span> <span className="text-gh-blue ml-2">Developer</span> <span className="text-gh-text ml-2">{`{`}</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">2</span>
                       <span className="text-gh-text ml-4">name:</span> <span className="text-gh-text ml-2">string;</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">3</span>
                       <span className="text-gh-text ml-4">skills:</span> <span className="text-gh-text ml-2">string[];</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">4</span>
                       <span className="text-gh-text ml-4">hardWorker:</span> <span className="text-gh-blue ml-2">boolean;</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">5</span>
                       <span className="text-gh-text">{`}`}</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">6</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">7</span>
                       <span className="text-gh-purple">const</span> <span className="text-gh-blue ml-2">thiago</span>: <span className="text-gh-blue ml-2">Developer</span> <span className="text-gh-text ml-2">= {`{`}</span>
                    </div>
                     <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">8</span>
                       <span className="text-gh-text ml-4">name:</span> <span className="text-gh-text ml-2">"{PROFILE.name}",</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">9</span>
                       <span className="text-gh-text ml-4">skills:</span> <span className="text-gh-text ml-2">["React", "Node", "AWS"],</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">10</span>
                       <span className="text-gh-text ml-4">hardWorker:</span> <span className="text-gh-blue ml-2">true</span>
                    </div>
                    <div className="flex">
                       <span className="text-gh-muted select-none w-8 text-right mr-4">11</span>
                       <span className="text-gh-text">{`}`}</span>
                    </div>
                 </div>
                 
                 {/* Terminal Footer */}
                 <div className="bg-[#161b22] px-4 py-2 border-t border-gh-border text-xs text-gh-muted flex justify-between">
                    <span>TypeScript React</span>
                    <span>UTF-8</span>
                 </div>
              </div>

              {/* Glow behind window */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gh-blue to-gh-purple rounded-xl blur-2xl opacity-20 -z-10"></div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;