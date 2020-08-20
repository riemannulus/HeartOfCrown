import { Player } from '../../src/core/player';
import { FarmingVillage } from '../../src/core/basic_card';

describe('Player', () => {
  describe('Turn', () => {
    it('should be 1 action point left after play', async () => {
      const player = new Player();
      const village = new FarmingVillage();

      expect(player.turn.action).toBe(1);
      await player.playCard(village);

      expect(player.turn.action).toBe(1);
    });
  });
});
