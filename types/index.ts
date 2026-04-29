import { ComponentType } from "react";

export type Links = {
  id: number;
  title: string;
  link: string;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
};

export type NumberDisplay = {
  id: number;
  number: number;
  label: string;
  differentStyling?: boolean;
};
export type ExpOrEdu = {
  id: number;
  location: string;
  role: string;
  start: number;
  end?: number;
};

export type Skill = {
  id: number;
  label: string;
};
export type SkillCategory = {
  id: number;
  category: string;
  skillsList: Skill[];
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  client: string;
  role: string;
  overview: string;
  thumbnail: string;
  liveUrl?: string;
  tags: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  sections: {
    heading: string;
    content: string | string[];
  }[];
  credits?: {
    name: string;
    role: string;
  }[];
  externalLinks?: {
    label: string;
    url: string;
  }[];
};
