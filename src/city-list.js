import {bindable, inject} from 'aurelia-framework';
import {GameEngineService} from './services/gameEngineService';
import {GameEngine} from './engines/gameEngine';

@inject(GameEngineService)
export class CityList{
  GameEngine;

  constructor(gameEngineService) {
    this.GameEngineService = gameEngineService;
    this.GameEngineService.GetGameEngine().then(
        gameEngine => {
          this.GameEngine = gameEngine;
        }
    );
  }

  MoveCity(index) {
    this.GameEngine.MoveCity(index);
  }
}
