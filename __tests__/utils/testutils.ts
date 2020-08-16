import { Card } from '../../src/core/card_models';
import { CardBuffer } from '../../src/core/card_struct';

export const makeBuffer = (cards: Array<Card>): CardBuffer => {
  const buffer = new CardBuffer();
  cards.forEach((card: Card) => {
    buffer.receive(card);
  });
  return buffer;
};

export const bufferHasCards = (
  buffer: CardBuffer,
  cards: Array<Card>
): boolean => {
  return JSON.stringify(buffer.getCards()) === JSON.stringify(cards);
};
