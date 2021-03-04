import {Node, JobState} from '@graphqlTypes';

export interface Context {
  authToken?: string;
  pachdAddress?: string;
}

export type LinkInputData = {
  source: number;
  target: number;
  error?: boolean;
  active?: boolean;
};

export interface Vertex extends Node {
  parents: string[];
  jobState?: JobState;
}
