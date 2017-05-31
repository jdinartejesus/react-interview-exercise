import * as types from '../constants/ActionTypes';

const initialState = {
  initialData: [],
  data: [],
  page: [],
  currentPage: 0,
  itemsPage: 2
};

function _generatePage (data, itemsPage, currentPage) {
  if (itemsPage === 0) {
    return { page: data, totalPages: 0 };
  }

  const start = itemsPage * currentPage;

  return {
    page: data.slice(start, start + itemsPage),
    totalPages: Math.ceil(data.length / itemsPage)
  };
}

export default function pagination (state = initialState, action) {
  switch (action.type) {

    case types.LOAD_DATA:
      let { itemsPage, currentPage } = state;
      let data = action.data;
      return {
        ...state,
        ..._generatePage(data, itemsPage, currentPage),
        data,
        initialData: data
      };

    case types.PAGE_NUMBER_CHANGE:
      currentPage = action.number;
      return {
        ...state,
        ..._generatePage(state.data, state.itemsPage, currentPage),
        currentPage
      };

    default:
      return state;
  }
}
