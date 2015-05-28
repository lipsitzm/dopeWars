import {GameEngine} from 'engines/gameEngine';

let gameEngine = null;

export class GameEngineService {
  // Not sure how I feel about this, but I think it's better to pass around the engine through the service than the this.Engine I was doing before
  //  and this is the simplest way to keep DI creating the rest of the services like I want...
  Initialize(cityService, drugService, playerService, dayService, difficultyLevelsService, surpriseService) {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        gameEngine = new GameEngine(cityService, drugService, playerService, dayService, difficultyLevelsService, surpriseService);
        resolve(gameEngine);
      });
  }

  GetGameEngine() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        // Should add a wait loop here that checks for gameEngine to not be null... Then this promise is actually useful :-)
        resolve(gameEngine);
      });
  }
}
