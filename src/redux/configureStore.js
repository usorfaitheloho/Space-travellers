import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer, { fetchMissionSuccess } from './missions/mission';

import logger from 'redux-logger';
import profileReducer from './profiles/profile';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missionReducer,
  profileReducer,
  rockets: rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchMissionSuccess());
store.dispatch(rocketReducer());
export default store;
