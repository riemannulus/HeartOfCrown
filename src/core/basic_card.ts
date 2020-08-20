import { Card, Land, Succession } from './card_models';
import { singleton } from '../utils/singleton';
import { Player } from './player';
import { Mixin } from 'ts-mixer';

@singleton
export class ApprenticeMaid extends Mixin(Card, Succession) {
  constructor() {
    super('Apprentice Maid', 2, 0);
    this._successionPoint = -2;
  }

  public supplyCount(playerCount: number): number {
    return 3 * playerCount;
  }
}

@singleton
export class FarmingVillage extends Mixin(Card, Land) {
  constructor() {
    super('Farming Village', 1, 1);
    this._value = 1;
  }

  public supplyCount(playerCount: number): number {
    return 7 * playerCount;
  }

  async onPlay(player: Player): Promise<void> {
    await super.onPlay(player);
    player.turn.action += 1;
    return Promise.resolve();
  }
}

@singleton
export class ImperialCapital extends Mixin(Card, Land, Succession) {
  constructor() {
    super('Imperial Capital', 11, 1);
    this._value = 5;
    this._successionPoint = 8;
  }

  public supplyCount(playerCount: number): number {
    return 1;
  }

  async onPlay(player: Player): Promise<void> {
    await super.onPlay(player);
    player.turn.action += 1;
    return Promise.resolve();
  }
}
