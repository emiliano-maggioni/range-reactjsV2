
export type rangeProps = {  
  minValue: number;
  maxValue: number;
  minValueInput: number;
  maxValueInput: number;
  updateMinValue:any;
  updateMaxValue:any;
  stepRange?:number[];
  fixedValue?:boolean;
};

export type rangeWrapperProps = {  
  defValues:any;
  stepRange?:number[];
  fixedValue?:boolean;
};

 
export type paginationInfo = {
  page: number;
  indexStart: number;
  indexEnd: number;
} 

export type rangeValues = {
  min: number;
  max: number;
} 


export type rangeDefValues = {
  min: number;
  max: number;
  valuesRange:number;
  stepRange?:number[];
} 


export type coordsRange = {
  barLeft: number;
  barRight: number;
  // minPercentage: number;
  // maxPercentage: number;
} 
