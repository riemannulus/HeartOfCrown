import { Turn } from './turn';
import { Card, Succession } from './card_models';
import { CardBuffer } from './card_struct';

export class Player {
  private _currentSuccessionPoint: number;
  private _turn: Turn;
  private _hand: CardBuffer;
  private _deck: CardBuffer;

  constructor() {
    this._currentSuccessionPoint = 0;
    this._turn = new Turn();
    this._hand = new CardBuffer();
    this._deck = new CardBuffer();
  }

  public async playCard(card: Card, from: CardBuffer = null) {
    if(from === null) from = this._hand;
    this._hand.discard(card);
    this._turn.action -= 1;
    await card.onPlay(this);
  }

  public async playEnroll(card: Card, from: CardBuffer = null) {
    if(from === null) from = this._hand;
    await (<Succession><unknown>card).onEnroll(this);
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
