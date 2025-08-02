import { PlanningAgainstGame } from "./planningAgainstGame";
import { PlanningConfiguration } from "./planningConfiguration";
import { PlanningTogetherGame } from "./planningTogetherGame";

export interface Planning {
    planningConfiguration: PlanningConfiguration;
    games: (PlanningAgainstGame | PlanningTogetherGame)[];
}