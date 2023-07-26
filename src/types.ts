export type StageType =
  | 'lead'
  | 'lead-extra'
  | 'rfp-in-progress'
  | 'submitted'
  | 'submitted-extra'
  | 'won'
  | 'won-extra'
  | 'lost'
  | 'lost-reverted'
  | 'closed'
  | 'closed-final';
export type PipelineType = 'basic' | 'advanced' | 'expert' | 'custom';
export type StageColorCode = 's1' | 's2' | 's3' | 's4' | 's5' | 's6';

export interface Stage {
  type: StageType;
  title: string;
  color: StageColorCode;
}

export interface Pipeline {
  title: String;
  type: PipelineType;
  stages: Stage[];
}
