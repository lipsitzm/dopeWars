import {bindable, inject} from 'aurelia-framework';
import {GameEngineService} from './services/gameEngineService';
import {GameEngine} from './engines/gameEngine';

@inject(GameEngineService)
export class CityList{
  GameEngine;
  CurrentCity;

  constructor(gameEngineService) {
    this.GameEngineService = gameEngineService;
    this.GameEngineService.GetGameEngine().then(
        gameEngine => {
          this.GameEngine = gameEngine;
          this.CurrentCity = this.GameEngine.Cities[this.GameEngine.CurrentCityIndex];
        }
    );
  }

  MoveCity(index) {
    this.CurrentCity = this.GameEngine.MoveCity(index);
  }
}
