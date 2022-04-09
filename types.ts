import { StringLiteralLike } from 'typescript';
import * as React from 'react';

export type ChartPropsData = {
  data?: QueryTimeObj[] | [];
  addTime: addTimeType;
};

export type QueryTimeObj = {
  time: number;
  queryCountName: string;
};

export type teamMemberPropsType = {
  name: string;
  github: string;
  linkedin: string;
  picture: string;
};

export type addTimeType = (time: number) => void;

export type possibleQueryType = {
  query: string;
  description: string;
  paragraph: string;
  queryHTML: string;
  queryComponent: React.FC;
};
