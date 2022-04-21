export type ChartPropsData = {
  data?: QueryTimeObj[] | [];
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

// export type addTimeType = (time: number) => void;

interface fieldType {
  [key: string]: boolean;
}

interface nestedFieldType {
  height?: {};
  diameter?: {};
}

export type possibleQueryType = {
  staticQueryString: string;
  description: string;
  paragraph: string;
  queryFields: fieldType | nestedFieldType | any;
};

export type allPossibleQueriesType = possibleQueryType[];

export interface QuerySelectorDropdownProps {
  possibleQueries: allPossibleQueriesType;
  handleSelection: (e) => void;
  currSelectionIdx: number;
}

export interface EditableQueryInputPropsInt {
  queryFields: { [key: string]: boolean };
  handleEditQueryToRun: (fieldState: { [key: string]: boolean }) => void;
  currSelectionIdx: number;
}
