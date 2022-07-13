export class NextDayCalculator {
    constructor() {
    }

    calculatorDate(date: Date): Date  {
        date.setDate(date.getDate() +1);
        return date;
    }
}