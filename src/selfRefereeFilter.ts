import { SelfRefereeScope } from "ts-sports-basics";

export interface SelfRefereeFilter {
    scope: SelfRefereeScope;
    nrOfRefereesPerPlace: number;
    categoryNrs: number[]|undefined;
    pouleNrs: number[]|undefined;
};