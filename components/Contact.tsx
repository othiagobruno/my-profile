import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';

const ContributionGraph = () => {
  // Mock contribution graph
  return (
    <div className="flex flex-col gap-1 overflow-hidden opacity-80">
      <div className="flex gap-1">
         {Array.from({ length: 52 }).map((_, col) => (
            <div key={col} className="flex flex-col gap-1">
               {Array.from({ length: 7 }).map((_, row) => {
                  // Randomize greens for "activity"
                  const level = Math.random();
                  let color = 'bg-[#161b22]'; // Empty
                  if (level > 0.8) color = 'bg-[#39d353]'; // High
                  else if (level > 0.6) color = 'bg-[#26a641]'; // Medium
                  else if (level > 0.4) color = 'bg-[#006d32]'; // Low
                  else if (level > 0.2) color = 'bg-[#0e4429]'; // Very Low
                  
                  return <div key={row} className={`w-2.5 h-2.5 rounded-sm ${color}`}></div>
               })}
            </div>
         ))}
      </div>
      <div className="flex justify-between text-[10px] text-gh-muted mt-2 font-mono">
         <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span><span>Dec</span>
      </div>
    </div>
  )
}

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gh-subtle border-t border-gh-border pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
           <div>
              <h2 className="text-2xl font-bold text-white mb-2">Start a conversation</h2>
              <p className="text-gh-muted mb-6">
                 Open an issue, submit a PR, or just say hello. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="flex gap-3">
                 <a 
                   href={`mailto:${PROFILE.contact.email}`}
                   className="px-4 py-2 bg-gh-green hover:bg-[#2ea043] text-white text-sm font-semibold rounded-md border border-[rgba(240,246,252,0.1)] transition-colors"
                 >
                    Email Me
                 </a>
                 <a 
                   href={`https://${PROFILE.contact.linkedin}`}
                   target="_blank"
                   rel="noreferrer"
                   className="px-4 py-2 bg-gh-subtle hover:bg-gh-hover border border-gh-border text-gh-blue text-sm font-semibold rounded-md transition-colors"
                 >
                    LinkedIn Profile
                 </a>
              </div>
           </div>

           <div className="bg-gh-bg border border-gh-border rounded-md p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                 <span className="text-sm font-semibold text-white">2,492 contributions in the last year</span>
                 <span className="text-xs text-gh-muted">Contribution settings</span>
              </div>
              <div className="overflow-x-auto pb-2">
                 <ContributionGraph />
              </div>
              <div className="flex items-center justify-end gap-2 mt-2 text-[10px] text-gh-muted">
                 <span>Less</span>
                 <div className="w-2.5 h-2.5 rounded-sm bg-[#161b22]"></div>
                 <div className="w-2.5 h-2.5 rounded-sm bg-[#0e4429]"></div>
                 <div className="w-2.5 h-2.5 rounded-sm bg-[#006d32]"></div>
                 <div className="w-2.5 h-2.5 rounded-sm bg-[#26a641]"></div>
                 <div className="w-2.5 h-2.5 rounded-sm bg-[#39d353]"></div>
                 <span>More</span>
              </div>
           </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gh-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-2">
              <div className="p-1 bg-gh-hover rounded-full">
                  <Github className="w-5 h-5 text-gh-muted" />
              </div>
              <span className="text-xs text-gh-muted">
                 © {new Date().getFullYear()} Thiago Bruno Miranda.
              </span>
           </div>
           
           <div className="flex items-center gap-6 text-xs text-gh-blue">
              <a href="#" className="hover:underline">Docs</a>
              <a href="#" className="hover:underline">API</a>
              <a href="#" className="hover:underline">Security</a>
              <a href="#" className="hover:underline">Status</a>
              <a href="#" className="hover:underline">Help</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;