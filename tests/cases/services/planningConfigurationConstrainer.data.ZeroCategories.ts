import { GameOrder, SeatConfig, SelfRefereeScope } from "ts-sports-basics";
import { PlanningConfiguration } from "../../../src";

export const zeroCategoriesConfiguration: PlanningConfiguration = {
  categories: [],
  sports: [
    {
      seatConfig: SeatConfig.HomeAwaySeatConfig,
      nrOfCycles: 1,
      nrOfRefereesPerGame: 1,
      fields: [
        {
          fieldNr: 1,
          pouleFilters: [
            {
              categoryNr: 1,
              pouleNrs: [1],
            },
          ],
        },
        {
          fieldNr: 2,
          pouleFilters: [
            {
              categoryNr: 1,
              pouleNrs: [2, 3, 4, 5],
            },
          ],
        },
        {
          fieldNr: 3,
          pouleFilters: [
            {
              categoryNr: 2,
              pouleNrs: [],
            },
          ],
        },
        {
          fieldNr: 4,
          pouleFilters: [],
        },
      ],
      selfRefereeFilters: undefined,
    },
    {
      seatConfig: SeatConfig.TogetherSeatConfig,
      nrOfCycles: 1,
      nrOfRefereesPerGame: 2,
      fields: [
        {
          fieldNr: 1,
          pouleFilters: [],
        },
        {
          fieldNr: 2,
          pouleFilters: [],
        },
      ],
      selfRefereeFilters: [
        {
          scope: SelfRefereeScope.SamePoule,
          nrOfRefereesPerPlace: 1,
          categoryNrs: [1],
          pouleNrs: [],
        },
        {
          scope: SelfRefereeScope.OtherPoulesSameCategory,
          nrOfRefereesPerPlace: 1,
          categoryNrs: [2],
          pouleNrs: undefined,
        },
      ],
    },
  ],
  referees: [
    {
      refereeNr: 1,
      sportNrs: [1],
      categoryNrs: [1],
    },
  ],
  gameOrder: GameOrder.CycleFirst,
  maxNrOfGamesInARow: {
    forPlace: undefined,
    includeSelfRefereePlaces: undefined,
    forReferee: 2,
  },
};
