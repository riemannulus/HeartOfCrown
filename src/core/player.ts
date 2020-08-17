import { Turn } from './turn';

export class Player {
  private _currentSuccessionPoint: number;
  private _turn: Turn;

  constructor() {
    this._currentSuccessionPoint = 0;
    this._turn = new Turn();
  }

  get currentSuccessionPoint(): number {
    return this._currentSuccessionPoint;
  }

  set currentSuccessionPoint(value: number) {
    this._currentSuccessionPoint = value;
  }

  get turn(): Turn {
    return this._turn;
  }

}
