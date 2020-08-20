import { Player } from '../../src/core/player';
import { ApprenticeMaid, FarmingVillage } from '../../src/core/basic_card';

describe('Player', () => {
  describe('Turn', () => {
    it('should be 1 action point left after play', async () => {
      const player = new Player();
      const village = new FarmingVillage();
      player.hand.receive(village);

      expect(player.turn.action).toBe(1);
      await player.playCard(village);

      expect(player.turn.action).toBe(1);
    });
    it('should be left -2 succession point after enroll', async () => {
      // Fixture
      const player = new Player();
      const maid = new ApprenticeMaid();

      // Before
      expect(player.currentSuccessionPoint).toBe(0);

      // Do
      await player.playEnroll(maid);

      // After
      expect(player.currentSuccessionPoint).toBe(-2);
    });
  });
  describe('Hand', () => {
    it('should be left 4 card after play', async () => {
      // Fixture
      const player = new Player();
      player.hand.receive(new ApprenticeMaid());
      player.hand.receive(new ApprenticeMaid());
      player.hand.receive(new FarmingVillage());
      player.hand.receive(new FarmingVillage());
      player.hand.receive(new FarmingVillage());

      // Before
      expect(player.hand.size()).toBe(5);

      // Do
      await player.playCard(new FarmingVillage());

      // After
      expect(player.hand.size()).toBe(4);
    });
    it("cannot be playing card without player's hand", async () => {
      // Fixture
      const player = new Player();

      // Do
      await expect(player.playCard(new FarmingVillage())).rejects.toThrow(
        new Error('Cannot discard that are not in the buffer.')
      );
    });
  });
});
