import { Card } from '../../src/core/card_models';
import { CardBuffer } from '../../src/core/card_struct';
// @ts-ignore
import { bufferHasCards, makeBuffer } from '../utils/testutils';

describe('CardStruct', () => {
  describe('CardBuffer', () => {
    test('receive card', () => {
      // Create test data
      const buffer = new CardBuffer();
      const village = new Card('Farming Village');
      const city = new Card('City');
      const largeCity = new Card('Large city');

      // Append card to CardBuffer
      buffer.receive(village);
      buffer.receive(city);
      buffer.receive(largeCity);

      // Order of CardBuffer is same as append order
      expect(buffer.search(0)).toBe(village);
      expect(buffer.search(1)).toBe(city);
      expect(buffer.search(2)).toBe(largeCity);
    });

    test('draw to another CardBuffer', () => {
      const village = new Card('Farming Village');
      const city = new Card('City');
      const largeCity = new Card('Large city');
      const source = makeBuffer([village, city, largeCity]);
      const target = new CardBuffer();

      expect(bufferHasCards(source, [village, city, largeCity])).toBeTruthy();
      expect(bufferHasCards(target, [])).toBeTruthy();

      const card1: Card = source.drawTo(target);
      expect(card1).toBe(card1);
      expect(bufferHasCards(source, [village, city])).toBeTruthy();
      expect(bufferHasCards(target, [largeCity])).toBeTruthy();

      const card2: Card = source.drawTo(target);
      expect(card2).toBe(card2);
      expect(bufferHasCards(source, [village])).toBeTruthy();
      expect(bufferHasCards(target, [largeCity, city])).toBeTruthy();

      const card3: Card = source.drawTo(target);
      expect(card3).toBe(card3);
      expect(bufferHasCards(source, [])).toBeTruthy();
      expect(bufferHasCards(target, [largeCity, city, village])).toBeTruthy();

      const card4: Card = source.drawTo(target);
      expect(card4).toBeUndefined();
    });
  });
});
