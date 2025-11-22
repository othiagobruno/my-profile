import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';
import { BookMarked, Star, Circle } from 'lucide-react';

interface SkillCardProps {
  skillGroup: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillGroup, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="repo-card bg-gh-bg border border-gh-border rounded-md p-4 flex flex-col h-full"
    >
      <div className="flex items-center gap-2 mb-3">
         <BookMarked className="w-4 h-4 text-gh-muted" />
         <span className="font-semibold text-gh-blue hover:underline cursor-pointer">
            {skillGroup.category.toLowerCase().replace(/\s+/g, '-')}
         </span>
         <span className="ml-auto text-xs border border-gh-border rounded-full px-2 py-0.5 text-gh-muted bg-gh-subtle">
            Public
         </span>
      </div>
      
      <p className="text-sm text-gh-muted mb-4 flex-grow">
         Core collection of {skillGroup.category} technologies used in production environments.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
          {skillGroup.items.map(item => (
              <span key={item} className="text-xs font-medium bg-gh-subtle text-gh-text px-2 py-1 rounded-md border border-gh-border">
                  {item}
              </span>
          ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-gh-muted mt-auto">
         <div className="flex items-center gap-1">
             <Circle className="w-3 h-3 text-gh-purple fill-current" />
             <span>{skillGroup.items[0]}</span>
         </div>
         <div className="flex items-center gap-1 hover:text-gh-blue cursor-pointer transition-colors">
            <Star className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 50) + 10}</span>
         </div>
         <div>Updated yesterday</div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gh-bg relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
           <h2 className="text-2xl font-semibold text-white mb-2">Top Repositories <span className="text-gh-muted font-normal">(Skills)</span></h2>
           <p className="text-gh-muted">Customize your pinned repositories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skillGroup, index) => (
            <SkillCard key={skillGroup.category} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;