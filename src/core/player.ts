import { CardBuffer } from './card_struct';

export class Player {
  private readonly deck: CardBuffer;
  private readonly hand: CardBuffer;
  private readonly territory: CardBuffer;
  private readonly field: CardBuffer;
  private readonly discard: CardBuffer;
}
