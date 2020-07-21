import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView1282534Reducer from '../features/CalendarView1282534/redux/reducers';
import SignUp2782526Reducer from '../features/SignUp2782526/redux/reducers'
import EmailAuth682524Reducer from '../features/EmailAuth682524/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView1282534: CalendarView1282534Reducer,
SignUp2782526: SignUp2782526Reducer,
EmailAuth682524: EmailAuth682524Reducer,

});