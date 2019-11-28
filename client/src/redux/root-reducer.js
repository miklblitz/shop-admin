import { combineReducers } from 'redux';

import boatRuducer from './boat/boat.reducer';

export default combineReducers({
  boat: boatRuducer
});