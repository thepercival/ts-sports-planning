import * as chai from 'chai';
import { PlanningConfigurationConstrainer, PlanningRequest } from '../../../src';

import { zeroCategoriesRequest } from './planningConfigurationConstrainer.data.ZeroCategories';
import { zeroPoulesRequest } from './planningConfigurationConstrainer.data.zeroPoules';

describe('PlanningConfigurationConstrainer', () => {

    it('Zero Categories', () => {
        const constrainer = new PlanningConfigurationConstrainer();

        // Read and parse the JSON file
        // const configuration: PlanningConfiguration = JSON.parse(readFileSync(zeroCatgeroesConfigFileName, 'utf-8'));
        const request: PlanningRequest = zeroCategoriesRequest;

        chai.expect(() => {
            constrainer.checkConstraintCategories(request.configuration);
        }).to.throw(Error); // or to.throw('error message')
        
    });
    
    it('Zero Poules', () => {
        const constrainer = new PlanningConfigurationConstrainer();

        const request: PlanningRequest = zeroPoulesRequest;

        chai.expect(() => {
            constrainer.checkConstraintCategories(request.configuration);
        }).to.throw(Error); // or to.throw('error message')
        
    });

});