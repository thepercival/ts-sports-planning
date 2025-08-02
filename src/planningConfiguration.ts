import { GameOrderEnum } from "../definitions/opanapi-planning-types";
import { PlanningCategory } from "./planningCategory";
import { PlanningReferee } from "./planningReferee";
import { PlanningSport } from "./planningSport";

export interface PlanningConfiguration {
    categories: PlanningCategory[];
    sports: PlanningSport[];
    referees: PlanningReferee[];    
}