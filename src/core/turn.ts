export class Turn {
  private _gold: number
  private _action: number

  constructor() {
    this._gold = 0;
    this._action = 1;
  }

  get gold(): number {
    return this._gold;
  }

  set gold(value: number) {
    this._gold = value;
  }

  get action(): number {
    return this._action;
  }

  set action(value: number) {
    this._action = value;
  }

}