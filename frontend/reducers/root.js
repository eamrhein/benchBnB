import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';
import entitiesReducer from './entities';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;
