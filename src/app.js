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
        { route: 'newGame',       moduleId: './game',         nav: true, title:'New Game' },
        { route: 'drugList',      moduleId: './drugList',     nav: true }
      ]);
    });
  }
}
