import {bindable} from 'aurelia-framework';

export class CityList{
  @bindable game_engine = null;
  @bindable cities = null;
  @bindable current_city = null;
  @bindable drugs = null;
  @bindable drugs_available = false;

  MoveCity(index) {
    this.game_engine.MoveCity(index);
  }
}
