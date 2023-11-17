export interface DailyPlan {
  dailyPlans: DailyPlanElement[];
}

export interface DailyPlanElement {
  day: string;
  plan: string;
}

export interface DailyPlanInput {
  day: number;
  plan: string;
}