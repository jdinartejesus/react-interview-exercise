import * as types from '../constants/ActionTypes';

export const initialState = {
  initialData: [],
  data: [],
  page: [],
  currentPage: 0,
  itemsPage: 2,
  totalPages: 1
};

function loadData (state, action) {
  const { itemsPage, currentPage } = state;
  const data = action.data;
  return {
    ...state,
    ..._generatePage(data, itemsPage, currentPage),
    data,
    initialData: data
  };
}

function pageNumberChange (state, action) {
  const currentPage = action.number;
  return {
    ...state,
    ..._generatePage(state.data, state.itemsPage, currentPage),
    currentPage
  };
}

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
      return loadData(state, action)

    case types.PAGE_NUMBER_CHANGE:
      return pageNumberChange(state, action)

    default:
      return state;
  }
}
