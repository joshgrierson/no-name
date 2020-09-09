interface Month {
    name: string;
    weeks: Week[];
}

interface Week {
    startDay: number;
    weekIndex: number;
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function weeksInMonth(monthIndex: number): Week[] {
    const weeks: Week[] = [];
    const date = new Date();

    return weeks;
}

function monthsInYear(): Month[] {
    const months: Month[] = [];

    monthNames.forEach((name, index) => {
        months.push({
            name,
            weeks: weeksInMonth(index),
        });
    });

    return months;
}

export default function (log: (...args: any[]) => void): void {
    const yearStruct = monthsInYear();

    log(yearStruct);
}
