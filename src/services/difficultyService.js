import {DifficultyLevel} from '../models/difficultyLevel';

let difficultyLevels = [
  new DifficultyLevel('Easy', 25000, 100, .1, 10000),
  new DifficultyLevel('Medium', 10000, 75, .3, 7500),
  new DifficultyLevel('Hard', 5000, 50, .5, 5000)
];

export class DifficultyLevelsService {
  GetDifficultyLevels() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(difficultyLevels);
      });
  }
}
