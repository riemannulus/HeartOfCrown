import { use } from 'typescript-mix';
import { Card, Land, Succession } from './card_models';
import { singleton } from './singleton';
import { Player } from './player';

@singleton
export class ApprenticeMaid extends Card {
  @use(Succession) public this;
  private readonly _successionPoint = -2;

  constructor() {
    super('Apprentice Maid', 2);
  }

  public supplyCount(playerCount: number): number {
    return 3 * playerCount;
  }

  get successionPoint(): number {
    return this._successionPoint;
  }

  async onGain(player: Player): Promise<void> {
    return Promise.resolve(undefined);
  }

  async onPlay(player: Player): Promise<void> {
    return Promise.resolve(undefined);
  }
}

@singleton
export class FarmingVillage extends Card {
  @use(Land) public this;
  private _value = 1;

  constructor() {
    super('Farming Village', 1);
  }

  public supplyCount(playerCount: number): number {
    return 7 * playerCount;
  }

  get value(): number {
    return this._value;
  }

  async onGain(player: Player): Promise<void> {
    return Promise.resolve(undefined);
  }

  async onPlay(player: Player): Promise<void> {
    return Promise.resolve(undefined);
  }
}
