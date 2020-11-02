import _ from 'lodash';
import { InputData } from './../Models/InputData';

export const updateCardsList = (id: string, array: InputData[], array1: InputData[]): any | undefined => {
    let found = _.find(array, { id });

    if (!found) {
        return undefined;
    }

    _.remove(array, found);
    array1.push(found);

    return {
        array, array1
    }
}
