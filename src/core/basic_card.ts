import { use } from 'typescript-mix';
import { Card, Land, Succession } from './card_models';
import { singleton } from '../utils/singleton';
import { Player } from './player';

export interface ApprenticeMaid extends Succession {}

@singleton
export class ApprenticeMaid extends Card {
  @use(Succession) public this;

  constructor() {
    super('Apprentice Maid', 2);
    this._successionPoint = -2;
  }

  public supplyCount(playerCount: number): number {
    return 3 * playerCount;
  }
}

export interface FarmingVillage extends Land {}

@singleton
export class FarmingVillage extends Card {
  @use(Land) public this;

  constructor() {
    super('Farming Village', 1);
    this._value = 1;
  }

  public supplyCount(playerCount: number): number {
    return 7 * playerCount;
  }
}

export interface ImperialCapital extends Succession, Land {}

@singleton
export class ImperialCapital extends Card {
  @use(Succession, Land) public this;

  constructor() {
    super('Imperial Capital', 11);
    this._value = 5;
    this._successionPoint = 8;
  }

  public supplyCount(playerCount: number): number {
    return 1;
  }
}
