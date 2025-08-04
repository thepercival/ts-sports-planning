import * as chai from 'chai';
import { PlanningConfiguration, PlanningConfigurationConstrainer } from '../../../src';

import { zeroCategoriesConfiguration } from "./planningConfigurationConstrainer.data.ZeroCategories";
import { zeroPoulesConfiguration } from './planningConfigurationConstrainer.data.zeroPoules';

describe('PlanningConfigurationConstrainer', () => {

    it('Zero Categories', () => {
        const constrainer = new PlanningConfigurationConstrainer();

        chai.expect(() => {
            constrainer.checkConstraintCategories(zeroCategoriesConfiguration);
        }).to.throw(Error); // or to.throw('error message')
        
    });
    
    it('Zero Poules', () => {
        const constrainer = new PlanningConfigurationConstrainer();

        chai.expect(() => {
            constrainer.checkConstraintCategories(zeroPoulesConfiguration);
        }).to.throw(Error); // or to.throw('error message')
        
    });

});