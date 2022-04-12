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
  selectableQuery: string;
  description: string;
  paragraph: string;
  queryFields: {};
};

export type allPossibleQueriesType = possibleQueryType[];

export interface QuerySelectorDropdownProps {
  possibleQueries: allPossibleQueriesType;
  handleSelection: (e) => void;
}
