import { ReactNode, ComponentType } from "react";

export  type Links = {
  id: number;
  title: string;
  link: string;
  description?: string;
  icon?: ComponentType<{className?:string}>;
};

export type NumberDisplay = {
  id:number;
  number: number;
  label:string;
  differentStyling?:boolean
}
export type ExpOrEdu = {
  id:number;
  location: string;
  role:string;
  start:number;
  end?:number
}
export type Skill = {
  id:number;
  label: string;
}

export type Project = {
  id: number;
  title: string;
  thumbnail: string;
  subtitle: string;
  category: string;
  client: string;
  role: string;
  overview: string;
  methodology?: string;
  duration?: string;
  liveUrl?: string;
  businessReason?: string;
  stateOfAffairs?: string;
  task?: string;
  approach?: string;
  insight?: string;
  bigIdea?: string;
  rationale?: string;
  brandProposition?: string;
  objectives?: string[];
  keyDeliverables?: string[];
  keyActivities?: string[];
  successMetrics?: string[];
  tags: string[];
  stakeholderCommunication?: {
    tools: string[];
    methods: string[];
  };
  riskManagement?: {
    approach: string;
    keyActivities: string[];
  };
  budgetManagement?: {
    approach: string;
    controls: string[];
  };
  requirements?: {
    functional: string[];
    nonFunctional: string[];
  };
  prioritisation?: {
    mustHave: string[];
    shouldHave: string[];
    couldHave: string[];
    wontHave: string[];
  };
  results?: {
  twitterImpressions?: number;
  twitterEngagements?: number;
  socialMediaEngagementUptick?: string;
  impact: string;
};
  targetAudience?: {
    gender: string;
    socioeconomicClass: string;
    status: string;
    ageRange: string;
    location: string;
  };
  externalLinks?: {
    label: string;
    url: string;
  }[];
  production?: {
  equipment: string[];
  finalOutput: string;
};
credits?: {
  name: string;
  role: string;
}[];
challengesAndSolutions?: {
  challenge: string;
  solution: string;
}[];
lessonsLearned?: string[];
};