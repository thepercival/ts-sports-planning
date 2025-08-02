import { PlanningGameProperties } from "./planningGameProperties";
import { TogetherSeat } from "./planningTogetherSeat";

export interface PlanningTogetherGame extends PlanningGameProperties {
    seats?: TogetherSeat[];
}