import { DailyPlanInput } from "./DailyPlan";

interface ShortPlan {
    short_plan_id: number,
    shortPlan: string,
    dailyPlan: string,
    waterDrop: number,
    steam: number,
    miniCloud: number,
    done: boolean,
    exception: boolean,
}

export interface ShortPlanInput {
    userId: number,
    year: number,
    shortPlan: string,
    period: number,
    dailyPlan: DailyPlanInput[],
}