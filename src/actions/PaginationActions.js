import * as types from '../constants/ActionTypes';

export function loadData (data) {
  return {
    type: types.LOAD_DATA,
    data
  };
}

export function pageNumberChange (number) {
  return {
    type: types.PAGE_NUMBER_CHANGE,
    number
  };
}
