import { ApprenticeMaid, FarmingVillage, ImperialCapital } from '../../src/core/basic_card';

describe('Basic Card', () => {
  test('isSingleton', () => {
    expect(new ApprenticeMaid() === new ApprenticeMaid()).toBeTruthy();
    expect(new FarmingVillage() === new FarmingVillage()).toBeTruthy();
  });
  describe('Apprentice Maid', () => {
    test('name', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.name).toBe("Apprentice Maid");
    });
    test('cost', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.cost).toBe(2);
    });
    test('succession point', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.successionPoint).toBe(-2);
    });
    test('supply count', () => {
      const apprenticeMaid = new ApprenticeMaid();
      expect(apprenticeMaid.supplyCount(2)).toBe(6);
      expect(apprenticeMaid.supplyCount(3)).toBe(9);
      expect(apprenticeMaid.supplyCount(4)).toBe(12);
    });
  });
  describe('Farming Village', () => {
    test('name', () => {
      const farmingVillage = new FarmingVillage();
      expect(farmingVillage.name).toBe("Farming Village");
    });
    test('cost', () => {
      const farmingVillage = new FarmingVillage();
      expect(farmingVillage.cost).toBe(1);
    });
    test('value', () => {
      const farmingVillage = new FarmingVillage();
      expect(farmingVillage.value).toBe(1);
    });
    test('supply count', () => {
      const farmingVillage = new FarmingVillage();
      expect(farmingVillage.supplyCount(2)).toBe(14);
      expect(farmingVillage.supplyCount(3)).toBe(21);
      expect(farmingVillage.supplyCount(4)).toBe(28);
    });
  });
  describe('Imperial Capital', () => {
    test('name', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.name).toBe("Imperial Capital");
    });
    test('cost', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.cost).toBe(11);
    });
    test('value', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.value).toBe(5);
    });
    test('succession point', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.successionPoint).toBe(8);
    });
    test('supply count', () => {
      const imperialCapital = new ImperialCapital();
      expect(imperialCapital.supplyCount(2)).toBe(1);
      expect(imperialCapital.supplyCount(3)).toBe(1);
      expect(imperialCapital.supplyCount(4)).toBe(1);
    });
  });
});
