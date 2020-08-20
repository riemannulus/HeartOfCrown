import { Player } from '../../src/core/player';
import { ApprenticeMaid, FarmingVillage } from '../../src/core/basic_card';

describe('Player', () => {
  describe('Turn', () => {
    it('should be 1 action point left after play', async () => {
      const player = new Player();
      const village = new FarmingVillage();

      expect(player.turn.action).toBe(1);
      await player.playCard(village);

      expect(player.turn.action).toBe(1);
    });
    it('should be left -2 succession point after enroll', async () => {
      const player = new Player();
      const maid = new ApprenticeMaid();

      expect(player.currentSuccessionPoint).toBe(0);
      await player.playEnroll(maid);

      expect(player.currentSuccessionPoint).toBe(-2);
    });
  });
});
