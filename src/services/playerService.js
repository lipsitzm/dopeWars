import {PlayerInfo} from 'models/playerInfo';

let player = new PlayerInfo();

export class PlayerService {
  GetPlayer() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(player);
      });
  }
}
