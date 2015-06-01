import {bindable, inject} from 'aurelia-framework';
import {GameEngine} from './engines/gameEngine';

@inject(GameEngine)
export class CityList{
  GameEngine;

  constructor(gameEngine) {
    this.GameEngine = gameEngine;
  }

  MoveCity(index) {
    this.GameEngine.MoveCity(index);
  }
}
