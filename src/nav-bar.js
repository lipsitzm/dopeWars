import {bindable, inject} from 'aurelia-framework';
import {DayService} from './services/dayService';

@inject(DayService)
export class NavBar {
  @bindable router = null;

  constructor(dayService) {
    this.DayService = dayService;
    this.DayOptions = null;

    this.DayService.GetDayOptions().then(dayOptions => {
      this.DayOptions = dayOptions;
      this.CurrentDayOption = dayOptions[0];
    });
  }
}
