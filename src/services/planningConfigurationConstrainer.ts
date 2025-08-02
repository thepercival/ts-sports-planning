import { PlanningCategory } from "../planningCategory";
import { PlanningConfiguration } from "../planningConfiguration";

export class PlanningConfigurationConstrainer
{
    /**
     * 1. There must be at least 1 category and 1 poule per category
     */
    public checkConstraintCategories(config: PlanningConfiguration): void {
        if( config.categories.length === 0 || config.categories.some( (category: PlanningCategory): boolean => {
            return category.poules.length === 0;
        })) {
            throw new Error('A planningConfiguration should have least have 1 category and 1 poule per category');
        }
    }
    
    // There must be at least 1 sport and per sport each poule should play at least at 1 field
    // Referees or SelfReferees : When configured there should be enough referees to plan 1 game
    // GamesOrder.PerPoule will be ignored when multiple sports are configured
}

    // /**
    //  * @param list<AgainstOneVsOne|AgainstOneVsTwo|AgainstTwoVsTwo|TogetherSport> $sports
    //  * @param SelfReferee $selfReferee
    //  * @return bool
    //  */
    // public function isCompatibleWithSportsAndSelfReferee(array $sports, SelfReferee $selfReferee): bool
    // {
    //     if ($selfReferee === SelfReferee::SamePoule) {
    //         foreach ($sports as $sport) {
    //             if( $sport instanceof TogetherSport) {
    //                 if( $sport->nrOfGamePlaces === null) {
    //                     return false;
    //                 }
    //                 $nrOfGamePlaces = $sport->nrOfGamePlaces;
    //             } else {
    //                 $nrOfGamePlaces = $sport->getNrOfGamePlaces();
    //             }
    //             if( $nrOfGamePlaces >= $this->getSmallestPoule() ) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     } // elseif ($selfReferee === SelfReferee::OtherPoules) {
    //     return $this->getNrOfPoules() > 1;
    // }

    // /**
    //  * @param list<AgainstOneVsOne|AgainstOneVsTwo|AgainstTwoVsTwo|TogetherSport> $sports
    //  * @return bool
    //  */
    // public function isCompatibleWithSports(array $sports): bool
    // {
    //     foreach ($sports as $sport) {
    //         if (!($sport instanceof TogetherSport && $sport->nrOfGamePlaces === null)) {
    //             $nrOfGamePlaces = $sport->nrOfGamePlaces ?? 0;
    //             if( $nrOfGamePlaces > $this->getSmallestPoule()) {
    //                 return false;
    //             }
    //         }
    //     }
    //     return true;
    // }