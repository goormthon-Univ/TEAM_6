import { DailyPlanInput } from "./DailyPlan";

export interface ShortPlan {
    short_plan_id: number,
    shortPlan: string,
    dailyPlan: string,
    waterDrop: number,
    steam: number,
    miniCloud: number,
    done: boolean,
    exception: boolean,

    // 오류 해결을 위한 타입 추가
    year_plan_id?: number,
    yearPlan?: string,
    halfPlan?: string,
    monthPlan?: string,
}

export interface ShortPlanInput {
    userId: number,
    year: number,
    shortPlan: string,
    period: number,
    dailyPlan: DailyPlanInput[],
}