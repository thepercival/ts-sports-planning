import { HomeAwaySeat, NorthSouthEastWestSeat } from "ts-sports-basics";
import { PlanningGameProperties } from "./planningGameProperties";

export interface PlanningAgainstGame extends PlanningGameProperties {
    seats: (HomeAwaySeat|NorthSouthEastWestSeat)[];
    batchNr: number;
}