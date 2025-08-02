import { GameOrder } from "ts-sports-basics";
import { PlanningConfiguration } from "./planningConfiguration";

export interface PlanningRequest {
    configuration: PlanningConfiguration;
    gameOrder: GameOrder;
    nrOfGamesInARow: number;
}