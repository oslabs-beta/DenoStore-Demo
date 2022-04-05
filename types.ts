export type ChartPropsData = {
  data?: number[];
  addTime: addTimeType;
};

export type addTimeType = (time: number) => void;
