import { fetchBenches } from './bench';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value,
});

export function updateFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().ui.filters)(dispatch);
  };
}