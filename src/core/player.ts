import { Turn } from './turn';
import { Card, Succession } from './card_models';
import { CardBuffer } from './card_struct';
import { ApprenticeMaid, FarmingVillage } from './basic_card';

const initDeck = [
  new ApprenticeMaid(),
  new ApprenticeMaid(),
  new ApprenticeMaid(),
  new FarmingVillage(),
  new FarmingVillage(),
  new FarmingVillage(),
  new FarmingVillage(),
  new FarmingVillage(),
  new FarmingVillage(),
  new FarmingVillage()
];

export class Player {
  private _currentSuccessionPoint: number;
  private _turn: Turn;
  private _hand: CardBuffer;
  private _deck: CardBuffer;
  private _discard: CardBuffer;

  constructor() {
    this._currentSuccessionPoint = 0;
    this._turn = new Turn();
    this._hand = new CardBuffer();
    this._deck = new CardBuffer();
    this._discard = new CardBuffer();

    initDeck.forEach(card => {
      this._deck.receive(card);
    });

    this._deck.shuffle();
  }

  public async playCard(card: Card, from: CardBuffer = null) {
    if (from === null) from = this._hand;
    this._hand.discard(card);
    this._turn.action -= 1;
    await card.onPlay(this);
  }

  public async playEnroll(card: Card, from: CardBuffer = null) {
    if (from === null) from = this._hand;
    await (<Succession>(<unknown>card)).onEnroll(this);
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

  get hand(): CardBuffer {
    return this._hand;
  }
}
