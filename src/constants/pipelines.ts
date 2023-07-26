import type { Pipeline, Stage } from '@/types';

const stages: Stage[] = [
  { color: 's1', title: 'Lead', type: 'lead' },
  { color: 's1', title: 'Lead Extra', type: 'lead-extra' },
  { color: 's2', title: 'RPF in Progress', type: 'rfp-in-progress' },
  { color: 's3', title: 'Submitted', type: 'submitted' },
  { color: 's3', title: 'Submitted Extra', type: 'submitted-extra' },
  { color: 's4', title: 'Won', type: 'won' },
  { color: 's4', title: 'Won Extra', type: 'won-extra' },
  { color: 's5', title: 'Lost', type: 'lost' },
  { color: 's5', title: 'Lost Reverted', type: 'lost-reverted' },
  { color: 's6', title: 'Closed', type: 'closed' },
  { color: 's6', title: 'Closed Final', type: 'closed-final' },
];

const pipelines: Pipeline[] = [
  {
    title: 'Basic',
    type: 'basic',
    stages: [stages[0], stages[2], stages[3], stages[5], stages[6], stages[9]],
  },
  {
    title: 'Advanced',
    type: 'advanced',
    stages: [
      stages[0],
      stages[1],
      stages[2],
      stages[3],
      stages[4],
      stages[5],
      stages[6],
      stages[9],
    ],
  },
  {
    title: 'Expert',
    type: 'expert',
    stages: stages,
  },
  {
    title: 'Custom',
    type: 'custom',
    stages: stages,
  },
];

export { stages, pipelines };
