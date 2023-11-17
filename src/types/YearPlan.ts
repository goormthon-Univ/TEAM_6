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

    // 오류 해결을 위한 타입 추가
    short_plan_id?: number,
    shortPlan?: string,
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