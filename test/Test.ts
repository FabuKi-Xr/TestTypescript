import "mocha";
import "should";

import { demo } from "../src/demo";

describe('merge', () => {  
    let d: demo;

    beforeEach(() => d = new demo());

    it('should return [ 0, 1, 2, 3, 4, 5, 6, 7 ]', () => {
        const mock_collection_1 = [0,1,2,3];
        const mock_collection_2 = [4,5,6,7];
        const expected = [0, 1, 2, 3, 4, 5, 6, 7];
        mock(d, mock_collection_1, mock_collection_2,expected);
    });

    it('should return [0, 5, 10, 11, 22, 24, 33, 47]', () => {
        const mock_collection_1 = [0,11,22,33];
        const mock_collection_2 = [5,10,24,47];
        const expected = [0,5, 10, 11, 22, 24, 33, 47];
        mock(d, mock_collection_1, mock_collection_2,expected);
    });
    it('should return [0, 5, 10, 11, 22, 24, 33, 47]', () => {
        const mock_collection_1 = [0,0,2,33,44,55];
        const mock_collection_2 = [0,33,33,44,49];
        const expected = [0,0, 0, 2, 33, 33, 33, 44, 44, 49, 55];
        mock(d, mock_collection_1, mock_collection_2,expected);
    });
})

function mock(d: demo, mock_collection_1: number[], mock_collection_2: number[],expected:number[]) {
    const result = d.merge(mock_collection_1, mock_collection_2);
    result.should.be.eql(expected);
}
