import {
  ApprenticeMaid,
  FarmingVillage,
  ImperialCapital
} from '../../src/core/basic_card';
import { Player } from '../../src/core/player';
import { Land, Succession } from '../../src/core/card_models';
import { hasMixin } from 'ts-mixer';

describe('Basic Card', () => {
  test('isSingleton', () => {
    expect(new ApprenticeMaid() === new ApprenticeMaid()).toBeTruthy();
    expect(new FarmingVillage() === new FarmingVillage()).toBeTruthy();
  });
  describe('Apprentice Maid', () => {
    test('name', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.name).toBe('Apprentice Maid');
    });
    test('cost', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.cost).toBe(2);
    });
    test('succession point', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.successionPoint).toBe(-2);
    });
    test('type', () => {
      const apprenticeMaid = new ApprenticeMaid();
      const isLand = hasMixin(apprenticeMaid, Land);
      const isSuccession = hasMixin(apprenticeMaid, Succession);
      expect(isSuccession).toBeTruthy();
      expect(isLand).toBeFalsy();
    });
    test('supply count', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.supplyCount(2)).toBe(6);
      expect(apprenticeMaid.supplyCount(3)).toBe(9);
      expect(apprenticeMaid.supplyCount(4)).toBe(12);
    });
    test('enroll card', () => {
      const player = new Player();
      const apprenticeMaid = new ApprenticeMaid();
      apprenticeMaid.onEnroll(player);
      expect(player.currentSuccessionPoint).toBe(-2);
    });
  });
  describe('Farming Village', () => {
    test('name', () => {
      const farmingVillage = new FarmingVillage();
      expect(farmingVillage.name).toBe('Farming Village');
    });
    test('cost', () => {
      const farmingVillage = new FarmingVillage();
      expect(farmingVillage.cost).toBe(1);
    });
    test('type', () => {
      const farmingVillage = new FarmingVillage();
      const isLand = hasMixin(farmingVillage, Land);
      const isSuccession = hasMixin(farmingVillage, Succession);
      expect(isLand).toBeTruthy();
      expect(isSuccession).toBeFalsy();
    });
    test('supply count', () => {
      const farmingVillage = new FarmingVillage();
      expect(farmingVillage.supplyCount(2)).toBe(14);
      expect(farmingVillage.supplyCount(3)).toBe(21);
      expect(farmingVillage.supplyCount(4)).toBe(28);
    });
    test('play card', async () => {
      const player = new Player();
      const farmingVillage = new FarmingVillage();
      await farmingVillage.onPlay(player);
      expect(player.turn.gold).toBe(1);
    });
  });
  describe('Imperial Capital', () => {
    test('name', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.name).toBe('Imperial Capital');
    });
    test('cost', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.cost).toBe(11);
    });
    test('succession point', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.successionPoint).toBe(8);
    });
    test('type', () => {
      const imperialCapital = new ImperialCapital();
      const isLand = hasMixin(imperialCapital, Land);
      const isSuccession = hasMixin(imperialCapital, Succession);
      expect(isLand).toBeTruthy();
      expect(isSuccession).toBeTruthy();
    });
    test('supply count', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.supplyCount(2)).toBe(1);
      expect(imperialCapital.supplyCount(3)).toBe(1);
      expect(imperialCapital.supplyCount(4)).toBe(1);
    });
    test('enroll card', async () => {
      const player = new Player();
      const imperialCapital = new ImperialCapital();
      await imperialCapital.onEnroll(player);
      expect(player.currentSuccessionPoint).toBe(8);
    });
    test('play card', async () => {
      const player = new Player();
      const imperialCapital = new ImperialCapital();
      await imperialCapital.onPlay(player);
      expect(player.turn.gold).toBe(5);
    });
  });
});
