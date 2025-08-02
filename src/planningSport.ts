import { SeatConfig } from "ts-sports-basics";
import { PlanningField } from "./planningField";
import { SelfRefereeFilter } from "./selfRefereeFilter";

export interface PlanningSport {
    seatConfig: SeatConfig;
    nrOfCycles: number;
    nrOfRefereesPerGame: number;
    fields: PlanningField[];
    
    selfRefereeFilters: SelfRefereeFilter[] | undefined;
}