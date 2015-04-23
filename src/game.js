import {inject} from 'aurelia-framework';
import {DrugList} from './drugList';

@inject(DrugList)
export class GameEngine {

  constructor(drugList){
    this.DrugList = drugList;
    this.DrugList.Update();
  }

  move() {
    this.DrugList.Update();
  }
}
