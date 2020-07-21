import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11682536Reducer from '../features/Dashboard11682536/redux/reducers'
import CalendarView1282534Reducer from '../features/CalendarView1282534/redux/reducers';
import EmailAuth682524Reducer from '../features/EmailAuth682524/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11682536: Dashboard11682536Reducer,
CalendarView1282534: CalendarView1282534Reducer,
EmailAuth682524: EmailAuth682524Reducer,

});