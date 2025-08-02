export interface PlanningField {
    fieldNr: number;

    // All poules will be used when no pouleFilters
    // All poules from a category are used when pouleNrs is empty    
    pouleFilters: FieldPouleFilter[];
}

export interface FieldPouleFilter {
    categoryNr: number;
    pouleNrs: number[]|undefined;
};