export interface DonePlan {
  done_plan: DonePlanElement[];
}

export interface DonePlanElement {
  year_plan_id: number;
  YearPlan: string;
  steam: number;
  done: boolean;
}
