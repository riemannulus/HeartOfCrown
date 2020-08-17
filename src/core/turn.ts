export class Turn {
  private _gold: number

  constructor() {
    this.gold = 0;
  }

  get gold(): number {
    return this._gold;
  }

  set gold(value: number) {
    this._gold = value;
  }

}