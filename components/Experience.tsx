import React from 'react';
import { EXPERIENCE } from '../constants';
import { GitCommit, GitPullRequest, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gh-bg border-t border-gh-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar - like GitHub Profile Sidebar */}
          <div className="md:w-1/4">
            <h2 className="text-2xl font-bold text-white mb-4">Contribution Activity</h2>
            <p className="text-gh-muted text-sm mb-6">
               Detailed history of professional roles, commits, and project deployments across {EXPERIENCE.length} organizations.
            </p>
            <div className="sticky top-24">
               <div className="bg-gh-subtle border border-gh-border rounded-md p-4">
                  <h3 className="text-sm font-bold text-white mb-3">Filter by year</h3>
                  <div className="space-y-1">
                     {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017].map(year => (
                        <div key={year} className="text-sm text-gh-blue hover:underline cursor-pointer flex justify-between">
                           <span>{year}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="md:w-3/4">
             <div className="relative ml-4 border-l-2 border-gh-border space-y-12 pb-12">
                {EXPERIENCE.map((job, index) => (
                   <motion.div 
                      key={job.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="relative pl-8"
                   >
                      {/* Icon on the line */}
                      <div className="absolute -left-[9px] top-0 bg-gh-bg p-1">
                         <div className="bg-gh-border p-1 rounded-full">
                            <GitPullRequest className="w-4 h-4 text-gh-muted" />
                         </div>
                      </div>

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                         <h3 className="text-lg font-semibold text-white hover:text-gh-blue cursor-pointer">
                            {job.role} <span className="text-gh-muted font-normal">at {job.company}</span>
                         </h3>
                         <div className="text-xs text-gh-muted font-mono border border-gh-border rounded-full px-2 py-0.5 mt-2 sm:mt-0 w-fit">
                            {job.period}
                         </div>
                      </div>

                      {/* Body (Card) */}
                      <div className="bg-gh-bg border border-gh-border rounded-md mt-3 p-4 hover:border-gh-muted transition-colors">
                         <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gh-border/50 text-xs text-gh-muted">
                            <GitCommit className="w-3 h-3" />
                            <span className="font-mono truncate">commit {job.id}f9a8...</span>
                         </div>
                         
                         <ul className="space-y-2 mb-4">
                            {job.description.map((desc, i) => (
                               <li key={i} className="text-sm text-gh-text leading-relaxed flex items-start gap-2">
                                  <span className="mt-1.5 w-1 h-1 rounded-full bg-gh-muted"></span>
                                  {desc}
                               </li>
                            ))}
                         </ul>

                         {job.techStack && (
                            <div className="flex flex-wrap gap-1 mt-2">
                               {job.techStack.map(tech => (
                                  <span key={tech} className="px-2 py-0.5 bg-[#ddf4ff]/10 text-blue-400 text-xs rounded-full border border-blue-400/20 font-medium">
                                     {tech}
                                  </span>
                               ))}
                            </div>
                         )}
                      </div>
                   </motion.div>
                ))}
                
                {/* End of timeline */}
                <div className="relative pl-8 pt-4">
                   <div className="absolute -left-[9px] top-0 bg-gh-bg p-1">
                      <div className="bg-gh-green/20 p-1 rounded-full border border-gh-green">
                         <div className="w-4 h-4 bg-gh-green rounded-full"></div>
                      </div>
                   </div>
                   <p className="text-sm text-gh-muted">Repository initialized (Career start)</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;