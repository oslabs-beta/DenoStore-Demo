export type ChartPropsData = {
  data?: QueryTimeObj[] | [];
  addTime: addTimeType;
};

export type QueryTimeObj = {
  time: number;
  queryCountName: string;
};

export type addTimeType = (time: number) => void;
