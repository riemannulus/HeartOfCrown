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

  private searchByIndex(index: number): Card {
    return this.cards[index];
  }

  private searchByName(index: string): Card {
    return undefined;
  }
}
