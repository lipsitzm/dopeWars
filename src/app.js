import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Dope Wars';
      config.map([
        // there's an error if you don't have a default route so new game gets an array with '' in it to get it to start there
        { route: ['', 'newGame'],       moduleId: './game',         nav: true, title:'New Game' },
        { route: 'drugList',      moduleId: './drugList',     nav: true }
      ]);
    });
  }
}
