export interface DoingPlan {
  yearPlans: YearPlan[];
  shortPlans: ShortPlan[];
}

export interface ShortPlan {
  shortPlanId: number;
  shortPlan: string;
  period: number;
  miniCloud: number;
  steam: number;
  done: boolean;
}

export interface YearPlan {
  yearPlanId: number;
  yearPlan: string;
  miniCloud: number;
  yearPlanSteam: number;
  yearPlanDone: boolean;
}
