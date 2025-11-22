import React from 'react';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon?: React.ReactNode;
}

export interface Project {
  name: string;
  description: string;
  role: string;
  tech: string[];
}