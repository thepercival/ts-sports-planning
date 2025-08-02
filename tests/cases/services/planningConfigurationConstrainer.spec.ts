import { readFileSync } from 'fs';
import * as chai from 'chai';
import { PlanningConfiguration, PlanningConfigurationConstrainer, PlanningRequest } from '../../../src';

import { zeroCategoriesConfig } from './planningConfigurationConstrainer.data.ZeroCategories';
import { zeroPoulesConfig } from './planningConfigurationConstrainer.data.zeroPoules';

describe('PlanningConfigurationConstrainer', () => {

    it('Zero Categories', () => {
        const constrainer = new PlanningConfigurationConstrainer();

        // Read and parse the JSON file
        // const configuration: PlanningConfiguration = JSON.parse(readFileSync(zeroCatgeroesConfigFileName, 'utf-8'));
        const request: PlanningRequest = zeroCategoriesConfig;

        chai.expect(() => {
            constrainer.checkConstraintCategories(request.configuration);
        }).to.throw(Error); // or to.throw('error message')
        
    });
    
    it('Zero Poules', () => {
        const constrainer = new PlanningConfigurationConstrainer();

        const request: PlanningRequest = zeroPoulesConfig;

        chai.expect(() => {
            constrainer.checkConstraintCategories(request.configuration);
        }).to.throw(Error); // or to.throw('error message')
        
    });

});