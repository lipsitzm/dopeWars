import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.map([
      // there's an error if you don't have a default route so new game gets an array with '' in it to get it to start there
      {
        route: '',
        moduleId: './game',
        nav: true,
        title:'New Game'
      },
      {
        route: 'newGame/:totalDays',
        moduleId: './game'
      }
    ]);

    config.title = 'Dope Wars';

    this.router = router;
  }
}
