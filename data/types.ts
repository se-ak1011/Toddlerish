export type Behaviour = {
  id: string;
  title: string;
  ageRange: string;
  whyItHappens: string;
  whenToSeekHelp: string;
  trickIds: string[];
  tags: string[];
  isFree: boolean;
};

export type Trick = {
  id: string;
  title: string;
  whatItIs: string;
  howToDoIt: string;
  whyItWorks: string;
  behaviourIds: string[];
  isFree: boolean;
};
