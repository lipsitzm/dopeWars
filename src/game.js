import {DrugList} from './drugList';

export class GameEngine {

  constructor(){
    this.DrugList = new DrugList();
    this.DrugList.UpdatePrices();
  }
}
