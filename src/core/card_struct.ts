import { Card } from './card_models';

export class CardBuffer {
  private readonly cards: Card[];

  constructor() {
    this.cards = [];
  }

  public receive(card: Card) {
    this.cards.push(card);
  }

  public search(index: number | string): Card {
    if (typeof index === 'number') {
      return this.searchByIndex(index);
    } else {
      return this.searchByName(index);
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

  private searchByName(index: string): Card {
    return undefined;
  }
}
