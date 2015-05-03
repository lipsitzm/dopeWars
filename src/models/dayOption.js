export class DayOption {
  totalDays;
  name;

  constructor(totalDaysIn) {
    this.totalDays = totalDaysIn;
    this.name = totalDaysIn + " Day Game";
  }

  get TotalDays() {
    return this.totalDays;
  }

  get Name() {
    return this.name;
  }
}
