export interface DailyPlan {
  dailyPlans: DailyPlanElement[];
}

export interface DailyPlanElement {
  day: string;
  plan: string;
}

// TODO: 이거 합쳐야 함
export interface DailyPlanInput {
  day: number;
  plan: string;
}

export interface DailyPlanRequest {
  dailyPlans: DailyPlanRequestElement[];
}

export interface DailyPlanRequestElement {
  day: number;
  plan: string;
}
