import { UPDATE_FILTER } from '../actions/filter';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  const filter = {
    [action.filter]: action.value,
  };
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, ...filter };
    default:
      return state;
  }
};

export default filtersReducer;
