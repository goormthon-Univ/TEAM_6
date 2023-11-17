import { DailyPlanInput } from "./DailyPlan";

export interface YearPlan {
    year_plan_id: number,
    yearPlan: string,
    halfPlan: string,
    monthPlan: string,
    dailyPlan: string,
    waterDrop: number,
    steam: number,
    miniCloud: number,
    done: boolean,
    exception: boolean,
}

export interface MonthlyPlanInput {
    year: number,
    month: number,
    monthlyPlan: string,
}

export interface YearPlanInput {
    userId: number,
    year: number,
    yearPlan: string,
    halfPlan: string,
    monthlyPlan: MonthlyPlanInput[],
    dailyPlan: DailyPlanInput[],
}