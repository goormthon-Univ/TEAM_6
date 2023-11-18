export const toDayString = (day: number) => {
    const days = ["월", "화", "수", "목", "금", "토"]
    return days[day-1];
}