import { Player } from './player';

export abstract class Card {
  private readonly _name: string;
  private readonly _cost: number;

  protected constructor(name: string, cost: number) {
    this._name = name;
    this._cost = cost;
  }

  /**
   * Return number of cards of this type in supply.
   * default value is 5.
   * @param playerCount
   */
  public supplyCount(playerCount: number): number {
    return 5;
  }

  public abstract async onGain(player: Player): Promise<void>;

  public abstract async onPlay(player: Player): Promise<void>;

  get name(): string {
    return this._name;
  }

  get cost(): number {
    return this._cost;
  }
}

/**
 * The succession card is used to raise the succession point.
 * You can register this card with your princess in phase 2
 * and get a score by registering it.
 */
export class Succession {
  private readonly _successionPoint: number;
}

export class Land {
  private readonly _value: number;
}
