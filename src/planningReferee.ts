import { PlanningRefereeFilter } from "./planningRefereeFilter copy";

export interface PlanningReferee {
    refereeNr: number;
    filters: PlanningRefereeFilter[];
}