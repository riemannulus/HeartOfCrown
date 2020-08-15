import { Card } from './card_models';
import { CardBuffer } from './card_struct';

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
