import { Card } from '../../src/core/card_models';
import { CardBuffer } from '../../src/core/card_struct';
import { bufferHasCards, makeBuffer } from '../../src/utils/testutils';
import { ApprenticeMaid, FarmingVillage } from '../../src/core/basic_card';

describe('CardStruct', () => {
  describe('CardBuffer', () => {
    test('receive card', () => {
      // Create test data
      const buffer = new CardBuffer();

      const village = new FarmingVillage();
      const maid = new ApprenticeMaid();

      // Append card to CardBuffer
      buffer.receive(village);
      buffer.receive(maid);
      buffer.receive(village);

      // Order of CardBuffer is same as append order
      expect(buffer.search(0)).toBe(village);
      expect(buffer.search(1)).toBe(maid);
      expect(buffer.search(2)).toBe(village);
    });

    test('draw to another CardBuffer', () => {
      const village = new FarmingVillage();
      const maid = new ApprenticeMaid();

      const source = makeBuffer([village, maid, village]);
      const target = new CardBuffer();

      expect(bufferHasCards(source, [village, maid, village])).toBeTruthy();
      expect(bufferHasCards(target, [])).toBeTruthy();

      const card1: Card = source.drawTo(target);
      expect(card1).toBe(card1);
      expect(bufferHasCards(source, [village, maid])).toBeTruthy();
      expect(bufferHasCards(target, [village])).toBeTruthy();

      const card2: Card = source.drawTo(target);
      expect(card2).toBe(card2);
      expect(bufferHasCards(source, [village])).toBeTruthy();
      expect(bufferHasCards(target, [village, maid])).toBeTruthy();

      const card3: Card = source.drawTo(target);
      expect(card3).toBe(card3);
      expect(bufferHasCards(source, [])).toBeTruthy();
      expect(bufferHasCards(target, [village, maid, village])).toBeTruthy();

      const card4: Card = source.drawTo(target);
      expect(card4).toBeUndefined();
    });
  });
});
