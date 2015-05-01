import {bindable} from 'aurelia-framework';

export class Day {
  @bindable current_day = 0;
  @bindable max_days = 0;
  @bindable is_last_day = false;
}
