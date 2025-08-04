import { GameOrder } from "ts-sports-basics";
import { PlanningCategory } from "./planningCategory";
import { PlanningReferee } from "./planningReferee";
import { PlanningSport } from "./planningSport";

export interface PlanningConfiguration {
    categories: PlanningCategory[];
    sports: PlanningSport[];
    referees: PlanningReferee[];    
    gameOrder: GameOrder;
    maxNrOfGamesInARow: {
        forPlace: number|undefined;
        includeSelfRefereePlaces: boolean|undefined;
        forReferee: number|undefined;
    };
}