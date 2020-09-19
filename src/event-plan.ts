interface Month {
    name: string;
    weeks: Weeks;
}

interface Weeks {
    startWeekDates: number[];
    days: number;
}

type EventPlanConsole = Console;

export interface EventPlanModel {
    runPlanner: () => void;
}

export default class EventPlan implements EventPlanModel {
    private static monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    constructor(private console: EventPlanConsole) {}

    public runPlanner(): void {
        const calendar = this.monthsInYear();

        this.console.log(JSON.stringify(calendar, null, 2));
    }

    private monthsInYear(): Month[] {
        const months: Month[] = [];

        EventPlan.monthNames.forEach((name, index) => {
            months.push({
                name,
                weeks: this.weeksInMonth(index),
            });
        });

        return months;
    }

    private weeksInMonth(monthIndex: number): Weeks {
        const week: Weeks = {
            startWeekDates: [],
            days: 0,
        };
        const date = new Date();

        date.setMonth(monthIndex + 1);
        date.setDate(0);

        const lastDate = date.getDate(); // last date of month (i.e 31)

        const numberOfWeeks = Math.ceil(lastDate / 7);

        for (let i = 1; i < numberOfWeeks; i++) {
            week.startWeekDates.push(7 * i);
        }

        week.days = lastDate % week.startWeekDates[0]; // find remainder of days (modulus)

        return week;
    }
}
