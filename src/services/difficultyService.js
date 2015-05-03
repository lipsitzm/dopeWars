import {DifficultyLevel} from 'models/difficultyLevel';

let difficultyLevels = [
  new DifficultyLevel('Easy', 50000, 100),
  new DifficultyLevel('Medium', 25000, 75),
  new DifficultyLevel('Hard', 5000, 50)
];

export class DifficultyLevelsService {
  GetDifficultyLevels() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(difficultyLevels);
      });
  }
}
