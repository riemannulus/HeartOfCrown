import { Card } from '../../src/core/card_models';
import { CardBuffer } from '../../src/core/card_struct';

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
  });
});
