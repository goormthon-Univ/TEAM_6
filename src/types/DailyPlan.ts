export interface DailyPlan {
  dailyPlans: DailyPlanElement[];
}

export interface DailyPlanElement {
  day: string;
  plan: string;
}

export interface DailyPlanRequest {
  dailyPlans: DailyPlanRequestElement[];
}

export interface DailyPlanRequestElement {
  day: number;
  plan: string;
}
