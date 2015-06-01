export class SurpriseEvents {
  activate(model) {
    this.results = model.Results;
    this.game = model.Game;
  }

  continue() {
    this.game.surpriseTriggered = false;
  }
}
