
import { SeatConfig } from './old/seatConfig';
import { SportCustomId } from './old/sportCustomId';

export interface Sport { 
    name: string;
    defaultSeatConfig: SeatConfig;
    customId: SportCustomId|undefined;
}
