import { Card } from './card_models';

export class CardBuffer {
  protected readonly cards: Card[];

  constructor() {
    this.cards = [];
  }

  public receive(card: Card) {
    this.cards.push(card);
  }

  public shuffle() {
    this.cards.sort(function() {
      return 0.5 - Math.random();
    });
  }

  public size() {
    return this.cards.length;
  }

  public discard(card: Card) {
    const idx = this.cards.indexOf(card);
    if (idx > -1) this.cards.splice(idx, 1);
    else throw new Error('Cannot discard that are not in the buffer.');
  }

  public search(index: number | string): Card {
    if (typeof index === 'number') {
      return this.searchByIndex(index);
    }
  }

  public getCards(): Card[] {
    return this.cards;
  }

  public drawTo(target: CardBuffer): Card {
    const card: Card = this.cards.pop();
    target.receive(card);
    return card;
  }

  private searchByIndex(index: number): Card {
    return this.cards[index];
  }
}

export class InPlayBuffer extends CardBuffer {
  discard(card: Card) {
    throw new Error('Cannot discard from InPlayBuffer');
  }

  drawTo(target: CardBuffer): Card {
    throw new Error('Cannot draw to other buffer on InPlayBuffer');
  }
}
